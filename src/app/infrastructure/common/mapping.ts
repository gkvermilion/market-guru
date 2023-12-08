import { IData } from "../../modules/datagrid/interface/datagrid.interface";
import { IDataGridState } from "../../modules/datagrid/store/interface/datagrid-state";

export function mapPayloadToState(payload: IData[]): IDataGridState[] {
    let state: IDataGridState[] = [];
    payload.forEach(data => {
        state.push({
            id: data.id,
            wbRating: data.wbRating,
            reviewsCount: data.reviewsCount,
            nomenclature: data.nomenclature,
            sku: data.sku,
            name: data.name,
            brandName: data.brandName,
            brandId: data.brandId,
            image: data.image,
            preview: data.preview,
            ordered: data.ordered,
            soldQuantity: data.soldQuantity,
            soldAmount: data.soldAmount,
            orderedAmount: data.orderedAmount,
            availability: data.availability,
        })
    });
    return state;
}