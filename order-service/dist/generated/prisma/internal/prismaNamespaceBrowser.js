import * as runtime from "@prisma/client/runtime/index-browser";
export const Decimal = runtime.Decimal;
export const NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
export const DbNull = runtime.DbNull;
export const JsonNull = runtime.JsonNull;
export const AnyNull = runtime.AnyNull;
export const ModelName = {
    User: 'User',
    RefreshToken: 'RefreshToken',
    Category: 'Category',
    Product: 'Product',
    Cart: 'Cart',
    CartItem: 'CartItem',
    Order: 'Order',
    OrderItem: 'OrderItem',
    Wishlist: 'Wishlist',
    WishlistItem: 'WishlistItem',
    Review: 'Review',
    InventoryLog: 'InventoryLog',
    Coupon: 'Coupon',
    DashboardStats: 'DashboardStats'
};
export const TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
export const UserScalarFieldEnum = {
    id: 'id',
    email: 'email',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    passwordResetCode: 'passwordResetCode',
    passwordResetExpires: 'passwordResetExpires'
};
export const RefreshTokenScalarFieldEnum = {
    id: 'id',
    token: 'token',
    userId: 'userId',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    revoked: 'revoked'
};
export const CategoryScalarFieldEnum = {
    id: 'id',
    name: 'name',
    slug: 'slug',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const ProductScalarFieldEnum = {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    price: 'price',
    images: 'images',
    stock: 'stock',
    categoryId: 'categoryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    lowStockAlert: 'lowStockAlert',
    avgRating: 'avgRating',
    ratingCount: 'ratingCount'
};
export const CartScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const CartItemScalarFieldEnum = {
    id: 'id',
    cartId: 'cartId',
    productId: 'productId',
    quantity: 'quantity',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const OrderScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    status: 'status',
    totalAmount: 'totalAmount',
    shippingAddress: 'shippingAddress',
    paymentReference: 'paymentReference',
    paymentStatus: 'paymentStatus',
    couponId: 'couponId',
    discountAmount: 'discountAmount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const OrderItemScalarFieldEnum = {
    id: 'id',
    orderId: 'orderId',
    productId: 'productId',
    quantity: 'quantity',
    price: 'price',
    createdAt: 'createdAt'
};
export const WishlistScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const WishlistItemScalarFieldEnum = {
    id: 'id',
    wishlistId: 'wishlistId',
    productId: 'productId',
    createdAt: 'createdAt'
};
export const ReviewScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    productId: 'productId',
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const InventoryLogScalarFieldEnum = {
    id: 'id',
    productId: 'productId',
    quantity: 'quantity',
    type: 'type',
    description: 'description',
    createdAt: 'createdAt',
    createdBy: 'createdBy'
};
export const CouponScalarFieldEnum = {
    id: 'id',
    code: 'code',
    type: 'type',
    value: 'value',
    minAmount: 'minAmount',
    maxAmount: 'maxAmount',
    startDate: 'startDate',
    endDate: 'endDate',
    isActive: 'isActive',
    usageLimit: 'usageLimit',
    usageCount: 'usageCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const DashboardStatsScalarFieldEnum = {
    id: 'id',
    date: 'date',
    totalSales: 'totalSales',
    orderCount: 'orderCount',
    newUserCount: 'newUserCount',
    productsSold: 'productsSold',
    avgOrderValue: 'avgOrderValue',
    topSellingProduct: 'topSellingProduct',
    createdAt: 'createdAt'
};
export const SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
export const QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
export const NullsOrder = {
    first: 'first',
    last: 'last'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map