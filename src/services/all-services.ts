import { syncDatabase } from "../lib/pouchdb";
import { createService } from "./create-service"

export const posConfigService = createService("posConfig");

export const userService = createService("users");

export const  productService = createService("products");

export const productCategoryService = createService("productCategories");

export const sectionService = createService("sections");

export const tableService = createService("tables");

export const promoService = createService("promos")

export const orderItemService = createService("orderItems")

export const orderPaymentService = createService("orderPayments")

export const baseOrderService = createService("orders")

export const orderService = {
    ...baseOrderService,
    postOrder: async (order: any) => {
        const result = await baseOrderService.add(order);
        await syncDatabase();
        return result;
    }
}