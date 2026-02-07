import { MachineType, SensorModel } from "./enum";

export type CreateModalProps = {
    open: boolean,
    onClose: () => void,
    onSucess: () => void
}

export type DeleteModalProps = {
    open: boolean,
    onClose: () => void,
    onSucess: () => void,
    pointInfo: { id: string, name: string }
}