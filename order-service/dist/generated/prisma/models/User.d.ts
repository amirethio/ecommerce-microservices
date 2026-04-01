import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    password: string | null;
    firstName: string | null;
    lastName: string | null;
    role: $Enums.Role | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    passwordResetCode: string | null;
    passwordResetExpires: Date | null;
};
export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    password: string | null;
    firstName: string | null;
    lastName: string | null;
    role: $Enums.Role | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    passwordResetCode: string | null;
    passwordResetExpires: Date | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    password: number;
    firstName: number;
    lastName: number;
    role: number;
    createdAt: number;
    updatedAt: number;
    passwordResetCode: number;
    passwordResetExpires: number;
    _all: number;
};
export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    password?: true;
    firstName?: true;
    lastName?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
    passwordResetCode?: true;
    passwordResetExpires?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    password?: true;
    firstName?: true;
    lastName?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
    passwordResetCode?: true;
    passwordResetExpires?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    password?: true;
    firstName?: true;
    lastName?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
    passwordResetCode?: true;
    passwordResetExpires?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserCountAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: string;
    email: string;
    password: string;
    firstName: string | null;
    lastName: string | null;
    role: $Enums.Role;
    createdAt: Date;
    updatedAt: Date;
    passwordResetCode: string | null;
    passwordResetExpires: Date | null;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.StringFilter<"User"> | string;
    email?: Prisma.StringFilter<"User"> | string;
    password?: Prisma.StringFilter<"User"> | string;
    firstName?: Prisma.StringNullableFilter<"User"> | string | null;
    lastName?: Prisma.StringNullableFilter<"User"> | string | null;
    role?: Prisma.EnumRoleFilter<"User"> | $Enums.Role;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    passwordResetCode?: Prisma.StringNullableFilter<"User"> | string | null;
    passwordResetExpires?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    refreshTokens?: Prisma.RefreshTokenListRelationFilter;
    cart?: Prisma.XOR<Prisma.CartNullableScalarRelationFilter, Prisma.CartWhereInput> | null;
    orders?: Prisma.OrderListRelationFilter;
    wishlist?: Prisma.XOR<Prisma.WishlistNullableScalarRelationFilter, Prisma.WishlistWhereInput> | null;
    reviews?: Prisma.ReviewListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    firstName?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastName?: Prisma.SortOrderInput | Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    passwordResetCode?: Prisma.SortOrderInput | Prisma.SortOrder;
    passwordResetExpires?: Prisma.SortOrderInput | Prisma.SortOrder;
    refreshTokens?: Prisma.RefreshTokenOrderByRelationAggregateInput;
    cart?: Prisma.CartOrderByWithRelationInput;
    orders?: Prisma.OrderOrderByRelationAggregateInput;
    wishlist?: Prisma.WishlistOrderByWithRelationInput;
    reviews?: Prisma.ReviewOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    password?: Prisma.StringFilter<"User"> | string;
    firstName?: Prisma.StringNullableFilter<"User"> | string | null;
    lastName?: Prisma.StringNullableFilter<"User"> | string | null;
    role?: Prisma.EnumRoleFilter<"User"> | $Enums.Role;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    passwordResetCode?: Prisma.StringNullableFilter<"User"> | string | null;
    passwordResetExpires?: Prisma.DateTimeNullableFilter<"User"> | Date | string | null;
    refreshTokens?: Prisma.RefreshTokenListRelationFilter;
    cart?: Prisma.XOR<Prisma.CartNullableScalarRelationFilter, Prisma.CartWhereInput> | null;
    orders?: Prisma.OrderListRelationFilter;
    wishlist?: Prisma.XOR<Prisma.WishlistNullableScalarRelationFilter, Prisma.WishlistWhereInput> | null;
    reviews?: Prisma.ReviewListRelationFilter;
}, "id" | "email">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    firstName?: Prisma.SortOrderInput | Prisma.SortOrder;
    lastName?: Prisma.SortOrderInput | Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    passwordResetCode?: Prisma.SortOrderInput | Prisma.SortOrder;
    passwordResetExpires?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"User"> | string;
    email?: Prisma.StringWithAggregatesFilter<"User"> | string;
    password?: Prisma.StringWithAggregatesFilter<"User"> | string;
    firstName?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    lastName?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    role?: Prisma.EnumRoleWithAggregatesFilter<"User"> | $Enums.Role;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    passwordResetCode?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    passwordResetExpires?: Prisma.DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null;
};
export type UserCreateInput = {
    id?: string;
    email: string;
    password: string;
    firstName?: string | null;
    lastName?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    passwordResetCode?: string | null;
    passwordResetExpires?: Date | string | null;
    refreshTokens?: Prisma.RefreshTokenCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartCreateNestedOneWithoutUserInput;
    orders?: Prisma.OrderCreateNestedManyWithoutUserInput;
    wishlist?: Prisma.WishlistCreateNestedOneWithoutUserInput;
    reviews?: Prisma.ReviewCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateInput = {
    id?: string;
    email: string;
    password: string;
    firstName?: string | null;
    lastName?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    passwordResetCode?: string | null;
    passwordResetExpires?: Date | string | null;
    refreshTokens?: Prisma.RefreshTokenUncheckedCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartUncheckedCreateNestedOneWithoutUserInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutUserInput;
    wishlist?: Prisma.WishlistUncheckedCreateNestedOneWithoutUserInput;
    reviews?: Prisma.ReviewUncheckedCreateNestedManyWithoutUserInput;
};
export type UserUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    passwordResetCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordResetExpires?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refreshTokens?: Prisma.RefreshTokenUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUpdateOneWithoutUserNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutUserNestedInput;
    wishlist?: Prisma.WishlistUpdateOneWithoutUserNestedInput;
    reviews?: Prisma.ReviewUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    passwordResetCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordResetExpires?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refreshTokens?: Prisma.RefreshTokenUncheckedUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUncheckedUpdateOneWithoutUserNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutUserNestedInput;
    wishlist?: Prisma.WishlistUncheckedUpdateOneWithoutUserNestedInput;
    reviews?: Prisma.ReviewUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateManyInput = {
    id?: string;
    email: string;
    password: string;
    firstName?: string | null;
    lastName?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    passwordResetCode?: string | null;
    passwordResetExpires?: Date | string | null;
};
export type UserUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    passwordResetCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordResetExpires?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    passwordResetCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordResetExpires?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    passwordResetCode?: Prisma.SortOrder;
    passwordResetExpires?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    passwordResetCode?: Prisma.SortOrder;
    passwordResetExpires?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    passwordResetCode?: Prisma.SortOrder;
    passwordResetExpires?: Prisma.SortOrder;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type UserCreateNestedOneWithoutRefreshTokensInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutRefreshTokensInput, Prisma.UserUncheckedCreateWithoutRefreshTokensInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutRefreshTokensInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutRefreshTokensNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutRefreshTokensInput, Prisma.UserUncheckedCreateWithoutRefreshTokensInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutRefreshTokensInput;
    upsert?: Prisma.UserUpsertWithoutRefreshTokensInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutRefreshTokensInput, Prisma.UserUpdateWithoutRefreshTokensInput>, Prisma.UserUncheckedUpdateWithoutRefreshTokensInput>;
};
export type UserCreateNestedOneWithoutCartInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCartInput, Prisma.UserUncheckedCreateWithoutCartInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCartInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutCartNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCartInput, Prisma.UserUncheckedCreateWithoutCartInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCartInput;
    upsert?: Prisma.UserUpsertWithoutCartInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutCartInput, Prisma.UserUpdateWithoutCartInput>, Prisma.UserUncheckedUpdateWithoutCartInput>;
};
export type UserCreateNestedOneWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutOrdersInput, Prisma.UserUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutOrdersInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutOrdersInput, Prisma.UserUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutOrdersInput;
    upsert?: Prisma.UserUpsertWithoutOrdersInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutOrdersInput, Prisma.UserUpdateWithoutOrdersInput>, Prisma.UserUncheckedUpdateWithoutOrdersInput>;
};
export type UserCreateNestedOneWithoutWishlistInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutWishlistInput, Prisma.UserUncheckedCreateWithoutWishlistInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutWishlistInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutWishlistNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutWishlistInput, Prisma.UserUncheckedCreateWithoutWishlistInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutWishlistInput;
    upsert?: Prisma.UserUpsertWithoutWishlistInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutWishlistInput, Prisma.UserUpdateWithoutWishlistInput>, Prisma.UserUncheckedUpdateWithoutWishlistInput>;
};
export type UserCreateNestedOneWithoutReviewsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutReviewsInput, Prisma.UserUncheckedCreateWithoutReviewsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutReviewsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutReviewsInput, Prisma.UserUncheckedCreateWithoutReviewsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutReviewsInput;
    upsert?: Prisma.UserUpsertWithoutReviewsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutReviewsInput, Prisma.UserUpdateWithoutReviewsInput>, Prisma.UserUncheckedUpdateWithoutReviewsInput>;
};
export type UserCreateWithoutRefreshTokensInput = {
    id?: string;
    email: string;
    password: string;
    firstName?: string | null;
    lastName?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    passwordResetCode?: string | null;
    passwordResetExpires?: Date | string | null;
    cart?: Prisma.CartCreateNestedOneWithoutUserInput;
    orders?: Prisma.OrderCreateNestedManyWithoutUserInput;
    wishlist?: Prisma.WishlistCreateNestedOneWithoutUserInput;
    reviews?: Prisma.ReviewCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutRefreshTokensInput = {
    id?: string;
    email: string;
    password: string;
    firstName?: string | null;
    lastName?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    passwordResetCode?: string | null;
    passwordResetExpires?: Date | string | null;
    cart?: Prisma.CartUncheckedCreateNestedOneWithoutUserInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutUserInput;
    wishlist?: Prisma.WishlistUncheckedCreateNestedOneWithoutUserInput;
    reviews?: Prisma.ReviewUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutRefreshTokensInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutRefreshTokensInput, Prisma.UserUncheckedCreateWithoutRefreshTokensInput>;
};
export type UserUpsertWithoutRefreshTokensInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutRefreshTokensInput, Prisma.UserUncheckedUpdateWithoutRefreshTokensInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutRefreshTokensInput, Prisma.UserUncheckedCreateWithoutRefreshTokensInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutRefreshTokensInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutRefreshTokensInput, Prisma.UserUncheckedUpdateWithoutRefreshTokensInput>;
};
export type UserUpdateWithoutRefreshTokensInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    passwordResetCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordResetExpires?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cart?: Prisma.CartUpdateOneWithoutUserNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutUserNestedInput;
    wishlist?: Prisma.WishlistUpdateOneWithoutUserNestedInput;
    reviews?: Prisma.ReviewUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutRefreshTokensInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    passwordResetCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordResetExpires?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cart?: Prisma.CartUncheckedUpdateOneWithoutUserNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutUserNestedInput;
    wishlist?: Prisma.WishlistUncheckedUpdateOneWithoutUserNestedInput;
    reviews?: Prisma.ReviewUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutCartInput = {
    id?: string;
    email: string;
    password: string;
    firstName?: string | null;
    lastName?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    passwordResetCode?: string | null;
    passwordResetExpires?: Date | string | null;
    refreshTokens?: Prisma.RefreshTokenCreateNestedManyWithoutUserInput;
    orders?: Prisma.OrderCreateNestedManyWithoutUserInput;
    wishlist?: Prisma.WishlistCreateNestedOneWithoutUserInput;
    reviews?: Prisma.ReviewCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutCartInput = {
    id?: string;
    email: string;
    password: string;
    firstName?: string | null;
    lastName?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    passwordResetCode?: string | null;
    passwordResetExpires?: Date | string | null;
    refreshTokens?: Prisma.RefreshTokenUncheckedCreateNestedManyWithoutUserInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutUserInput;
    wishlist?: Prisma.WishlistUncheckedCreateNestedOneWithoutUserInput;
    reviews?: Prisma.ReviewUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutCartInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutCartInput, Prisma.UserUncheckedCreateWithoutCartInput>;
};
export type UserUpsertWithoutCartInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutCartInput, Prisma.UserUncheckedUpdateWithoutCartInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutCartInput, Prisma.UserUncheckedCreateWithoutCartInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutCartInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutCartInput, Prisma.UserUncheckedUpdateWithoutCartInput>;
};
export type UserUpdateWithoutCartInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    passwordResetCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordResetExpires?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refreshTokens?: Prisma.RefreshTokenUpdateManyWithoutUserNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutUserNestedInput;
    wishlist?: Prisma.WishlistUpdateOneWithoutUserNestedInput;
    reviews?: Prisma.ReviewUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutCartInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    passwordResetCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordResetExpires?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refreshTokens?: Prisma.RefreshTokenUncheckedUpdateManyWithoutUserNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutUserNestedInput;
    wishlist?: Prisma.WishlistUncheckedUpdateOneWithoutUserNestedInput;
    reviews?: Prisma.ReviewUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutOrdersInput = {
    id?: string;
    email: string;
    password: string;
    firstName?: string | null;
    lastName?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    passwordResetCode?: string | null;
    passwordResetExpires?: Date | string | null;
    refreshTokens?: Prisma.RefreshTokenCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartCreateNestedOneWithoutUserInput;
    wishlist?: Prisma.WishlistCreateNestedOneWithoutUserInput;
    reviews?: Prisma.ReviewCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutOrdersInput = {
    id?: string;
    email: string;
    password: string;
    firstName?: string | null;
    lastName?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    passwordResetCode?: string | null;
    passwordResetExpires?: Date | string | null;
    refreshTokens?: Prisma.RefreshTokenUncheckedCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartUncheckedCreateNestedOneWithoutUserInput;
    wishlist?: Prisma.WishlistUncheckedCreateNestedOneWithoutUserInput;
    reviews?: Prisma.ReviewUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutOrdersInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutOrdersInput, Prisma.UserUncheckedCreateWithoutOrdersInput>;
};
export type UserUpsertWithoutOrdersInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutOrdersInput, Prisma.UserUncheckedUpdateWithoutOrdersInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutOrdersInput, Prisma.UserUncheckedCreateWithoutOrdersInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutOrdersInput, Prisma.UserUncheckedUpdateWithoutOrdersInput>;
};
export type UserUpdateWithoutOrdersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    passwordResetCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordResetExpires?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refreshTokens?: Prisma.RefreshTokenUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUpdateOneWithoutUserNestedInput;
    wishlist?: Prisma.WishlistUpdateOneWithoutUserNestedInput;
    reviews?: Prisma.ReviewUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutOrdersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    passwordResetCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordResetExpires?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refreshTokens?: Prisma.RefreshTokenUncheckedUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUncheckedUpdateOneWithoutUserNestedInput;
    wishlist?: Prisma.WishlistUncheckedUpdateOneWithoutUserNestedInput;
    reviews?: Prisma.ReviewUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutWishlistInput = {
    id?: string;
    email: string;
    password: string;
    firstName?: string | null;
    lastName?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    passwordResetCode?: string | null;
    passwordResetExpires?: Date | string | null;
    refreshTokens?: Prisma.RefreshTokenCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartCreateNestedOneWithoutUserInput;
    orders?: Prisma.OrderCreateNestedManyWithoutUserInput;
    reviews?: Prisma.ReviewCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutWishlistInput = {
    id?: string;
    email: string;
    password: string;
    firstName?: string | null;
    lastName?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    passwordResetCode?: string | null;
    passwordResetExpires?: Date | string | null;
    refreshTokens?: Prisma.RefreshTokenUncheckedCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartUncheckedCreateNestedOneWithoutUserInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutUserInput;
    reviews?: Prisma.ReviewUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutWishlistInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutWishlistInput, Prisma.UserUncheckedCreateWithoutWishlistInput>;
};
export type UserUpsertWithoutWishlistInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutWishlistInput, Prisma.UserUncheckedUpdateWithoutWishlistInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutWishlistInput, Prisma.UserUncheckedCreateWithoutWishlistInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutWishlistInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutWishlistInput, Prisma.UserUncheckedUpdateWithoutWishlistInput>;
};
export type UserUpdateWithoutWishlistInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    passwordResetCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordResetExpires?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refreshTokens?: Prisma.RefreshTokenUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUpdateOneWithoutUserNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutUserNestedInput;
    reviews?: Prisma.ReviewUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutWishlistInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    passwordResetCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordResetExpires?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refreshTokens?: Prisma.RefreshTokenUncheckedUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUncheckedUpdateOneWithoutUserNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutUserNestedInput;
    reviews?: Prisma.ReviewUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutReviewsInput = {
    id?: string;
    email: string;
    password: string;
    firstName?: string | null;
    lastName?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    passwordResetCode?: string | null;
    passwordResetExpires?: Date | string | null;
    refreshTokens?: Prisma.RefreshTokenCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartCreateNestedOneWithoutUserInput;
    orders?: Prisma.OrderCreateNestedManyWithoutUserInput;
    wishlist?: Prisma.WishlistCreateNestedOneWithoutUserInput;
};
export type UserUncheckedCreateWithoutReviewsInput = {
    id?: string;
    email: string;
    password: string;
    firstName?: string | null;
    lastName?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    passwordResetCode?: string | null;
    passwordResetExpires?: Date | string | null;
    refreshTokens?: Prisma.RefreshTokenUncheckedCreateNestedManyWithoutUserInput;
    cart?: Prisma.CartUncheckedCreateNestedOneWithoutUserInput;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutUserInput;
    wishlist?: Prisma.WishlistUncheckedCreateNestedOneWithoutUserInput;
};
export type UserCreateOrConnectWithoutReviewsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutReviewsInput, Prisma.UserUncheckedCreateWithoutReviewsInput>;
};
export type UserUpsertWithoutReviewsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutReviewsInput, Prisma.UserUncheckedUpdateWithoutReviewsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutReviewsInput, Prisma.UserUncheckedCreateWithoutReviewsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutReviewsInput, Prisma.UserUncheckedUpdateWithoutReviewsInput>;
};
export type UserUpdateWithoutReviewsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    passwordResetCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordResetExpires?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refreshTokens?: Prisma.RefreshTokenUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUpdateOneWithoutUserNestedInput;
    orders?: Prisma.OrderUpdateManyWithoutUserNestedInput;
    wishlist?: Prisma.WishlistUpdateOneWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    passwordResetCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    passwordResetExpires?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    refreshTokens?: Prisma.RefreshTokenUncheckedUpdateManyWithoutUserNestedInput;
    cart?: Prisma.CartUncheckedUpdateOneWithoutUserNestedInput;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutUserNestedInput;
    wishlist?: Prisma.WishlistUncheckedUpdateOneWithoutUserNestedInput;
};
export type UserCountOutputType = {
    refreshTokens: number;
    orders: number;
    reviews: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    refreshTokens?: boolean | UserCountOutputTypeCountRefreshTokensArgs;
    orders?: boolean | UserCountOutputTypeCountOrdersArgs;
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs;
};
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
export type UserCountOutputTypeCountRefreshTokensArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RefreshTokenWhereInput;
};
export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
};
export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReviewWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    password?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    passwordResetCode?: boolean;
    passwordResetExpires?: boolean;
    refreshTokens?: boolean | Prisma.User$refreshTokensArgs<ExtArgs>;
    cart?: boolean | Prisma.User$cartArgs<ExtArgs>;
    orders?: boolean | Prisma.User$ordersArgs<ExtArgs>;
    wishlist?: boolean | Prisma.User$wishlistArgs<ExtArgs>;
    reviews?: boolean | Prisma.User$reviewsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    password?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    passwordResetCode?: boolean;
    passwordResetExpires?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    password?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    passwordResetCode?: boolean;
    passwordResetExpires?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    email?: boolean;
    password?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    passwordResetCode?: boolean;
    passwordResetExpires?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "email" | "password" | "firstName" | "lastName" | "role" | "createdAt" | "updatedAt" | "passwordResetCode" | "passwordResetExpires", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    refreshTokens?: boolean | Prisma.User$refreshTokensArgs<ExtArgs>;
    cart?: boolean | Prisma.User$cartArgs<ExtArgs>;
    orders?: boolean | Prisma.User$ordersArgs<ExtArgs>;
    wishlist?: boolean | Prisma.User$wishlistArgs<ExtArgs>;
    reviews?: boolean | Prisma.User$reviewsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        refreshTokens: Prisma.$RefreshTokenPayload<ExtArgs>[];
        cart: Prisma.$CartPayload<ExtArgs> | null;
        orders: Prisma.$OrderPayload<ExtArgs>[];
        wishlist: Prisma.$WishlistPayload<ExtArgs> | null;
        reviews: Prisma.$ReviewPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        email: string;
        password: string;
        firstName: string | null;
        lastName: string | null;
        role: $Enums.Role;
        createdAt: Date;
        updatedAt: Date;
        passwordResetCode: string | null;
        passwordResetExpires: Date | null;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserFieldRefs;
}
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    refreshTokens<T extends Prisma.User$refreshTokensArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$refreshTokensArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    cart<T extends Prisma.User$cartArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$cartArgs<ExtArgs>>): Prisma.Prisma__CartClient<runtime.Types.Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    orders<T extends Prisma.User$ordersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    wishlist<T extends Prisma.User$wishlistArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$wishlistArgs<ExtArgs>>): Prisma.Prisma__WishlistClient<runtime.Types.Result.GetResult<Prisma.$WishlistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    reviews<T extends Prisma.User$reviewsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'String'>;
    readonly email: Prisma.FieldRef<"User", 'String'>;
    readonly password: Prisma.FieldRef<"User", 'String'>;
    readonly firstName: Prisma.FieldRef<"User", 'String'>;
    readonly lastName: Prisma.FieldRef<"User", 'String'>;
    readonly role: Prisma.FieldRef<"User", 'Role'>;
    readonly createdAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly passwordResetCode: Prisma.FieldRef<"User", 'String'>;
    readonly passwordResetExpires: Prisma.FieldRef<"User", 'DateTime'>;
}
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    where: Prisma.UserWhereUniqueInput;
};
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type User$refreshTokensArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RefreshTokenSelect<ExtArgs> | null;
    omit?: Prisma.RefreshTokenOmit<ExtArgs> | null;
    include?: Prisma.RefreshTokenInclude<ExtArgs> | null;
    where?: Prisma.RefreshTokenWhereInput;
    orderBy?: Prisma.RefreshTokenOrderByWithRelationInput | Prisma.RefreshTokenOrderByWithRelationInput[];
    cursor?: Prisma.RefreshTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RefreshTokenScalarFieldEnum | Prisma.RefreshTokenScalarFieldEnum[];
};
export type User$cartArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CartSelect<ExtArgs> | null;
    omit?: Prisma.CartOmit<ExtArgs> | null;
    include?: Prisma.CartInclude<ExtArgs> | null;
    where?: Prisma.CartWhereInput;
};
export type User$ordersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrderSelect<ExtArgs> | null;
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithRelationInput | Prisma.OrderOrderByWithRelationInput[];
    cursor?: Prisma.OrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrderScalarFieldEnum | Prisma.OrderScalarFieldEnum[];
};
export type User$wishlistArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WishlistSelect<ExtArgs> | null;
    omit?: Prisma.WishlistOmit<ExtArgs> | null;
    include?: Prisma.WishlistInclude<ExtArgs> | null;
    where?: Prisma.WishlistWhereInput;
};
export type User$reviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReviewSelect<ExtArgs> | null;
    omit?: Prisma.ReviewOmit<ExtArgs> | null;
    include?: Prisma.ReviewInclude<ExtArgs> | null;
    where?: Prisma.ReviewWhereInput;
    orderBy?: Prisma.ReviewOrderByWithRelationInput | Prisma.ReviewOrderByWithRelationInput[];
    cursor?: Prisma.ReviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReviewScalarFieldEnum | Prisma.ReviewScalarFieldEnum[];
};
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=User.d.ts.map