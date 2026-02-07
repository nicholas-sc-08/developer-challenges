import { MachineType, SensorModel } from "./enum";
import { MonitoringPointType } from "./monitoring";

export type CreateModalProps = {
    open: boolean,
    onClose: () => void,
    onSucess: () => void
}

export type UpdateModalProps = {
    open: boolean,
    onClose: () => void,
    onSucess: () => void,
    data: MonitoringPointType
}

export type DeleteModalProps = {
    open: boolean,
    onClose: () => void,
    onSucess: () => void,
    pointInfo: { id: string, name: string }
}