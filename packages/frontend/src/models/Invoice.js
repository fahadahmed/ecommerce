import { types } from 'mobx-state-tree';
import ItemList from './ItemList';

const Invoice = types
  .model("Invoice", {
    currency: types.string,
    is_paid: false,
    itemList: types.optional(ItemList, {items: [] })
  })

export default Invoice;