import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client/runtime/client").DbNullClass;
export declare const JsonNull: import("@prisma/client/runtime/client").JsonNullClass;
export declare const AnyNull: import("@prisma/client/runtime/client").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly RefreshToken: "RefreshToken";
    readonly Category: "Category";
    readonly Product: "Product";
    readonly Cart: "Cart";
    readonly CartItem: "CartItem";
    readonly Order: "Order";
    readonly OrderItem: "OrderItem";
    readonly Wishlist: "Wishlist";
    readonly WishlistItem: "WishlistItem";
    readonly Review: "Review";
    readonly InventoryLog: "InventoryLog";
    readonly Coupon: "Coupon";
    readonly DashboardStats: "DashboardStats";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly password: "password";
    readonly firstName: "firstName";
    readonly lastName: "lastName";
    readonly role: "role";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly passwordResetCode: "passwordResetCode";
    readonly passwordResetExpires: "passwordResetExpires";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const RefreshTokenScalarFieldEnum: {
    readonly id: "id";
    readonly token: "token";
    readonly userId: "userId";
    readonly expiresAt: "expiresAt";
    readonly createdAt: "createdAt";
    readonly revoked: "revoked";
};
export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum];
export declare const CategoryScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly slug: "slug";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum];
export declare const ProductScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly slug: "slug";
    readonly description: "description";
    readonly price: "price";
    readonly images: "images";
    readonly stock: "stock";
    readonly categoryId: "categoryId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly lowStockAlert: "lowStockAlert";
    readonly avgRating: "avgRating";
    readonly ratingCount: "ratingCount";
};
export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum];
export declare const CartScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CartScalarFieldEnum = (typeof CartScalarFieldEnum)[keyof typeof CartScalarFieldEnum];
export declare const CartItemScalarFieldEnum: {
    readonly id: "id";
    readonly cartId: "cartId";
    readonly productId: "productId";
    readonly quantity: "quantity";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CartItemScalarFieldEnum = (typeof CartItemScalarFieldEnum)[keyof typeof CartItemScalarFieldEnum];
export declare const OrderScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly status: "status";
    readonly totalAmount: "totalAmount";
    readonly shippingAddress: "shippingAddress";
    readonly paymentReference: "paymentReference";
    readonly paymentStatus: "paymentStatus";
    readonly couponId: "couponId";
    readonly discountAmount: "discountAmount";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum];
export declare const OrderItemScalarFieldEnum: {
    readonly id: "id";
    readonly orderId: "orderId";
    readonly productId: "productId";
    readonly quantity: "quantity";
    readonly price: "price";
    readonly createdAt: "createdAt";
};
export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum];
export declare const WishlistScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type WishlistScalarFieldEnum = (typeof WishlistScalarFieldEnum)[keyof typeof WishlistScalarFieldEnum];
export declare const WishlistItemScalarFieldEnum: {
    readonly id: "id";
    readonly wishlistId: "wishlistId";
    readonly productId: "productId";
    readonly createdAt: "createdAt";
};
export type WishlistItemScalarFieldEnum = (typeof WishlistItemScalarFieldEnum)[keyof typeof WishlistItemScalarFieldEnum];
export declare const ReviewScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly productId: "productId";
    readonly rating: "rating";
    readonly comment: "comment";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum];
export declare const InventoryLogScalarFieldEnum: {
    readonly id: "id";
    readonly productId: "productId";
    readonly quantity: "quantity";
    readonly type: "type";
    readonly description: "description";
    readonly createdAt: "createdAt";
    readonly createdBy: "createdBy";
};
export type InventoryLogScalarFieldEnum = (typeof InventoryLogScalarFieldEnum)[keyof typeof InventoryLogScalarFieldEnum];
export declare const CouponScalarFieldEnum: {
    readonly id: "id";
    readonly code: "code";
    readonly type: "type";
    readonly value: "value";
    readonly minAmount: "minAmount";
    readonly maxAmount: "maxAmount";
    readonly startDate: "startDate";
    readonly endDate: "endDate";
    readonly isActive: "isActive";
    readonly usageLimit: "usageLimit";
    readonly usageCount: "usageCount";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CouponScalarFieldEnum = (typeof CouponScalarFieldEnum)[keyof typeof CouponScalarFieldEnum];
export declare const DashboardStatsScalarFieldEnum: {
    readonly id: "id";
    readonly date: "date";
    readonly totalSales: "totalSales";
    readonly orderCount: "orderCount";
    readonly newUserCount: "newUserCount";
    readonly productsSold: "productsSold";
    readonly avgOrderValue: "avgOrderValue";
    readonly topSellingProduct: "topSellingProduct";
    readonly createdAt: "createdAt";
};
export type DashboardStatsScalarFieldEnum = (typeof DashboardStatsScalarFieldEnum)[keyof typeof DashboardStatsScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map