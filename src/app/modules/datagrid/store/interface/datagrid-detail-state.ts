import { IDataChangeStore } from "../../../../infrastructure/interface/data-change-store";
import { IDataGridState } from "./datagrid-state";

export interface IDataGridDetailState extends IDataChangeStore<IDataGridState[]> {
    data: IDataGridState[];
    origin: IDataGridState[];
}