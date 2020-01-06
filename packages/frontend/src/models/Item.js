import { types, getParent } from 'mobx-state-tree';

const Item = types
  .model("Item", {
    name: types.string,
    quantity: types.number,
    variant: types.string,
    category: types.string,
    price: types.number
  })
  .actions(self => ({
    increment() {
      self.quantity = self.quantity + 1;
    },
    decrement() {
      if (self.quantity > 0) {
        self.quantity = self.quantity - 1;
        if (self.quantity === 0) {
          self.remove();
        }
      }
    },
    remove() {
      getParent(self, 2).remove(self);
    }
  }))
  .views(self => ({
    total() {
      return self.quantity * self.price;
    }
  }))

export default Item;