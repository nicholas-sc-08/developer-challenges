import { Injectable } from "@nestjs/common";
import { MonitoringPointRepo } from "./monitoringPoint.repository";
import { PrismaService } from "src/prisma/client";
import { CreateMonitoringPointDTO } from "../dto/createMonitoringPoint.dto";
import { updateMonitoringPointDTO } from "../dto/updateMonitoringPoint.dto";

@Injectable()
export class PrismaMonitoringPoint extends MonitoringPointRepo {
    constructor(private readonly prisma: PrismaService) {
        super();
    }

    async findAllPaginatedPoints(page: number) {
        const limit = 5;
        const items = await this.prisma.monitoringPoint.findMany({ skip: (page - 1) * limit, take: limit, include: { machine: { select: { name: true, type: true } }, sensor: { select: { model: true, sensorUid: true } } }, orderBy: { name: "asc" } });
        const total = await this.prisma.monitoringPoint.count();
        return { items, total };
    }

    async findMonitoringPointById(id: string) {
        return await this.prisma.monitoringPoint.findUnique({ where: { id }, include: { machine: { select: { name: true, type: true } }, sensor: { select: { model: true, sensorUid: true } } } });
    }

    async createMonitoringPoint(data: CreateMonitoringPointDTO) {
        return await this.prisma.monitoringPoint.create({ data });
    }

    async updateMonitoringPoint(data: updateMonitoringPointDTO, id: string) {
        return await this.prisma.monitoringPoint.update({ where: { id }, data });
    }

    async deleteMonitoringPoint(id: string) {
        await this.prisma.monitoringPoint.delete({ where: { id } });
    }
}