import { ConflictException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { MachineRepo } from './repository/machine.repository';
import { CreateMachineDTO } from './dto/createMachine.dto';
import { UpdateMachineDTO } from './dto/updateMachine.dto';

@Injectable()
export class MachineService {
    constructor(@Inject("MachineRepo") private readonly machineRepo: MachineRepo) { }

    async findManyByUser(userId: string) {
        return await this.machineRepo.findManyByUser(userId);
    }

    async findManyMachines() {
        return await this.machineRepo.findManyMachines();
    }

    async findUniqueMachine(id: string) {
        const machine = await this.machineRepo.findUniqueMachine(id);

        if (machine) {
            return machine;
        }
        throw new NotFoundException(`Machine with id ${id} does not exists!`);
    }

    async createMachine(data: CreateMachineDTO, userId: string) {
        const machineExists = await this.machineRepo.findMachineByName(data.name);

        if (machineExists) {
            throw new ConflictException(`Machine with name ${data.name} already exists!`);
        }

        if(userId != "123") {
            throw new ConflictException("User id must be valid!");
        }

        return await this.machineRepo.createMachine(data, userId);
    }

    async updateMachine(id: string, data: UpdateMachineDTO, userId: string) {
        const machine = await this.machineRepo.findUniqueMachine(id);
        if(!machine) {
            throw new NotFoundException(`Machine with id ${id} not found`);
        }

        if(machine.userId != userId) {
            throw new ConflictException("You don't have permission to update this machine");
        }

        if(data.name && machine.name != data.name) {
            const machineExists = await this.machineRepo.findMachineByName(data.name);
            if(machineExists) {
                throw new ConflictException(`Machine with name ${data.name} already exists!`);
            }
        }

        return await this.machineRepo.updateMachine(data, id);
    }

    async deleteMachine(id: string) {
        const machineExists = await this.machineRepo.findUniqueMachine(id);

        if (machineExists) {
            await this.machineRepo.deleteMachine(id);
            return { message: `Machine with id ${id} has been sucessfully deleted!` }
        }
        throw new NotFoundException(`Machine with id ${id} does not exists!`);
    }
}
