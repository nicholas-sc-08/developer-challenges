import { MachineType, SensorModel } from "./enum";

export type CreateModalProps = {
    open: boolean,
    onClose: () => void;
    onSucess: () => void;
}