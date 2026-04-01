import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type WishlistItemModel = runtime.Types.Result.DefaultSelection<Prisma.$WishlistItemPayload>;
export type AggregateWishlistItem = {
    _count: WishlistItemCountAggregateOutputType | null;
    _min: WishlistItemMinAggregateOutputType | null;
    _max: WishlistItemMaxAggregateOutputType | null;
};
export type WishlistItemMinAggregateOutputType = {
    id: string | null;
    wishlistId: string | null;
    productId: string | null;
    createdAt: Date | null;
};
export type WishlistItemMaxAggregateOutputType = {
    id: string | null;
    wishlistId: string | null;
    productId: string | null;
    createdAt: Date | null;
};
export type WishlistItemCountAggregateOutputType = {
    id: number;
    wishlistId: number;
    productId: number;
    createdAt: number;
    _all: number;
};
export type WishlistItemMinAggregateInputType = {
    id?: true;
    wishlistId?: true;
    productId?: true;
    createdAt?: true;
};
export type WishlistItemMaxAggregateInputType = {
    id?: true;
    wishlistId?: true;
    productId?: true;
    createdAt?: true;
};
export type WishlistItemCountAggregateInputType = {
    id?: true;
    wishlistId?: true;
    productId?: true;
    createdAt?: true;
    _all?: true;
};
export type WishlistItemAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WishlistItemWhereInput;
    orderBy?: Prisma.WishlistItemOrderByWithRelationInput | Prisma.WishlistItemOrderByWithRelationInput[];
    cursor?: Prisma.WishlistItemWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | WishlistItemCountAggregateInputType;
    _min?: WishlistItemMinAggregateInputType;
    _max?: WishlistItemMaxAggregateInputType;
};
export type GetWishlistItemAggregateType<T extends WishlistItemAggregateArgs> = {
    [P in keyof T & keyof AggregateWishlistItem]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWishlistItem[P]> : Prisma.GetScalarType<T[P], AggregateWishlistItem[P]>;
};
export type WishlistItemGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WishlistItemWhereInput;
    orderBy?: Prisma.WishlistItemOrderByWithAggregationInput | Prisma.WishlistItemOrderByWithAggregationInput[];
    by: Prisma.WishlistItemScalarFieldEnum[] | Prisma.WishlistItemScalarFieldEnum;
    having?: Prisma.WishlistItemScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WishlistItemCountAggregateInputType | true;
    _min?: WishlistItemMinAggregateInputType;
    _max?: WishlistItemMaxAggregateInputType;
};
export type WishlistItemGroupByOutputType = {
    id: string;
    wishlistId: string;
    productId: string;
    createdAt: Date;
    _count: WishlistItemCountAggregateOutputType | null;
    _min: WishlistItemMinAggregateOutputType | null;
    _max: WishlistItemMaxAggregateOutputType | null;
};
type GetWishlistItemGroupByPayload<T extends WishlistItemGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<WishlistItemGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof WishlistItemGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], WishlistItemGroupByOutputType[P]> : Prisma.GetScalarType<T[P], WishlistItemGroupByOutputType[P]>;
}>>;
export type WishlistItemWhereInput = {
    AND?: Prisma.WishlistItemWhereInput | Prisma.WishlistItemWhereInput[];
    OR?: Prisma.WishlistItemWhereInput[];
    NOT?: Prisma.WishlistItemWhereInput | Prisma.WishlistItemWhereInput[];
    id?: Prisma.StringFilter<"WishlistItem"> | string;
    wishlistId?: Prisma.StringFilter<"WishlistItem"> | string;
    productId?: Prisma.StringFilter<"WishlistItem"> | string;
    createdAt?: Prisma.DateTimeFilter<"WishlistItem"> | Date | string;
    wishlist?: Prisma.XOR<Prisma.WishlistScalarRelationFilter, Prisma.WishlistWhereInput>;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
};
export type WishlistItemOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    wishlistId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    wishlist?: Prisma.WishlistOrderByWithRelationInput;
    product?: Prisma.ProductOrderByWithRelationInput;
};
export type WishlistItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    wishlistId_productId?: Prisma.WishlistItemWishlistIdProductIdCompoundUniqueInput;
    AND?: Prisma.WishlistItemWhereInput | Prisma.WishlistItemWhereInput[];
    OR?: Prisma.WishlistItemWhereInput[];
    NOT?: Prisma.WishlistItemWhereInput | Prisma.WishlistItemWhereInput[];
    wishlistId?: Prisma.StringFilter<"WishlistItem"> | string;
    productId?: Prisma.StringFilter<"WishlistItem"> | string;
    createdAt?: Prisma.DateTimeFilter<"WishlistItem"> | Date | string;
    wishlist?: Prisma.XOR<Prisma.WishlistScalarRelationFilter, Prisma.WishlistWhereInput>;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
}, "id" | "wishlistId_productId">;
export type WishlistItemOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    wishlistId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.WishlistItemCountOrderByAggregateInput;
    _max?: Prisma.WishlistItemMaxOrderByAggregateInput;
    _min?: Prisma.WishlistItemMinOrderByAggregateInput;
};
export type WishlistItemScalarWhereWithAggregatesInput = {
    AND?: Prisma.WishlistItemScalarWhereWithAggregatesInput | Prisma.WishlistItemScalarWhereWithAggregatesInput[];
    OR?: Prisma.WishlistItemScalarWhereWithAggregatesInput[];
    NOT?: Prisma.WishlistItemScalarWhereWithAggregatesInput | Prisma.WishlistItemScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"WishlistItem"> | string;
    wishlistId?: Prisma.StringWithAggregatesFilter<"WishlistItem"> | string;
    productId?: Prisma.StringWithAggregatesFilter<"WishlistItem"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"WishlistItem"> | Date | string;
};
export type WishlistItemCreateInput = {
    id?: string;
    createdAt?: Date | string;
    wishlist: Prisma.WishlistCreateNestedOneWithoutItemsInput;
    product: Prisma.ProductCreateNestedOneWithoutWishlistItemsInput;
};
export type WishlistItemUncheckedCreateInput = {
    id?: string;
    wishlistId: string;
    productId: string;
    createdAt?: Date | string;
};
export type WishlistItemUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    wishlist?: Prisma.WishlistUpdateOneRequiredWithoutItemsNestedInput;
    product?: Prisma.ProductUpdateOneRequiredWithoutWishlistItemsNestedInput;
};
export type WishlistItemUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wishlistId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WishlistItemCreateManyInput = {
    id?: string;
    wishlistId: string;
    productId: string;
    createdAt?: Date | string;
};
export type WishlistItemUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WishlistItemUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wishlistId?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WishlistItemListRelationFilter = {
    every?: Prisma.WishlistItemWhereInput;
    some?: Prisma.WishlistItemWhereInput;
    none?: Prisma.WishlistItemWhereInput;
};
export type WishlistItemOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type WishlistItemWishlistIdProductIdCompoundUniqueInput = {
    wishlistId: string;
    productId: string;
};
export type WishlistItemCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    wishlistId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WishlistItemMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    wishlistId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WishlistItemMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    wishlistId?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WishlistItemCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.WishlistItemCreateWithoutProductInput, Prisma.WishlistItemUncheckedCreateWithoutProductInput> | Prisma.WishlistItemCreateWithoutProductInput[] | Prisma.WishlistItemUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.WishlistItemCreateOrConnectWithoutProductInput | Prisma.WishlistItemCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.WishlistItemCreateManyProductInputEnvelope;
    connect?: Prisma.WishlistItemWhereUniqueInput | Prisma.WishlistItemWhereUniqueInput[];
};
export type WishlistItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.WishlistItemCreateWithoutProductInput, Prisma.WishlistItemUncheckedCreateWithoutProductInput> | Prisma.WishlistItemCreateWithoutProductInput[] | Prisma.WishlistItemUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.WishlistItemCreateOrConnectWithoutProductInput | Prisma.WishlistItemCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.WishlistItemCreateManyProductInputEnvelope;
    connect?: Prisma.WishlistItemWhereUniqueInput | Prisma.WishlistItemWhereUniqueInput[];
};
export type WishlistItemUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.WishlistItemCreateWithoutProductInput, Prisma.WishlistItemUncheckedCreateWithoutProductInput> | Prisma.WishlistItemCreateWithoutProductInput[] | Prisma.WishlistItemUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.WishlistItemCreateOrConnectWithoutProductInput | Prisma.WishlistItemCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.WishlistItemUpsertWithWhereUniqueWithoutProductInput | Prisma.WishlistItemUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.WishlistItemCreateManyProductInputEnvelope;
    set?: Prisma.WishlistItemWhereUniqueInput | Prisma.WishlistItemWhereUniqueInput[];
    disconnect?: Prisma.WishlistItemWhereUniqueInput | Prisma.WishlistItemWhereUniqueInput[];
    delete?: Prisma.WishlistItemWhereUniqueInput | Prisma.WishlistItemWhereUniqueInput[];
    connect?: Prisma.WishlistItemWhereUniqueInput | Prisma.WishlistItemWhereUniqueInput[];
    update?: Prisma.WishlistItemUpdateWithWhereUniqueWithoutProductInput | Prisma.WishlistItemUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.WishlistItemUpdateManyWithWhereWithoutProductInput | Prisma.WishlistItemUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.WishlistItemScalarWhereInput | Prisma.WishlistItemScalarWhereInput[];
};
export type WishlistItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.WishlistItemCreateWithoutProductInput, Prisma.WishlistItemUncheckedCreateWithoutProductInput> | Prisma.WishlistItemCreateWithoutProductInput[] | Prisma.WishlistItemUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.WishlistItemCreateOrConnectWithoutProductInput | Prisma.WishlistItemCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.WishlistItemUpsertWithWhereUniqueWithoutProductInput | Prisma.WishlistItemUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.WishlistItemCreateManyProductInputEnvelope;
    set?: Prisma.WishlistItemWhereUniqueInput | Prisma.WishlistItemWhereUniqueInput[];
    disconnect?: Prisma.WishlistItemWhereUniqueInput | Prisma.WishlistItemWhereUniqueInput[];
    delete?: Prisma.WishlistItemWhereUniqueInput | Prisma.WishlistItemWhereUniqueInput[];
    connect?: Prisma.WishlistItemWhereUniqueInput | Prisma.WishlistItemWhereUniqueInput[];
    update?: Prisma.WishlistItemUpdateWithWhereUniqueWithoutProductInput | Prisma.WishlistItemUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.WishlistItemUpdateManyWithWhereWithoutProductInput | Prisma.WishlistItemUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.WishlistItemScalarWhereInput | Prisma.WishlistItemScalarWhereInput[];
};
export type WishlistItemCreateNestedManyWithoutWishlistInput = {
    create?: Prisma.XOR<Prisma.WishlistItemCreateWithoutWishlistInput, Prisma.WishlistItemUncheckedCreateWithoutWishlistInput> | Prisma.WishlistItemCreateWithoutWishlistInput[] | Prisma.WishlistItemUncheckedCreateWithoutWishlistInput[];
    connectOrCreate?: Prisma.WishlistItemCreateOrConnectWithoutWishlistInput | Prisma.WishlistItemCreateOrConnectWithoutWishlistInput[];
    createMany?: Prisma.WishlistItemCreateManyWishlistInputEnvelope;
    connect?: Prisma.WishlistItemWhereUniqueInput | Prisma.WishlistItemWhereUniqueInput[];
};
export type WishlistItemUncheckedCreateNestedManyWithoutWishlistInput = {
    create?: Prisma.XOR<Prisma.WishlistItemCreateWithoutWishlistInput, Prisma.WishlistItemUncheckedCreateWithoutWishlistInput> | Prisma.WishlistItemCreateWithoutWishlistInput[] | Prisma.WishlistItemUncheckedCreateWithoutWishlistInput[];
    connectOrCreate?: Prisma.WishlistItemCreateOrConnectWithoutWishlistInput | Prisma.WishlistItemCreateOrConnectWithoutWishlistInput[];
    createMany?: Prisma.WishlistItemCreateManyWishlistInputEnvelope;
    connect?: Prisma.WishlistItemWhereUniqueInput | Prisma.WishlistItemWhereUniqueInput[];
};
export type WishlistItemUpdateManyWithoutWishlistNestedInput = {
    create?: Prisma.XOR<Prisma.WishlistItemCreateWithoutWishlistInput, Prisma.WishlistItemUncheckedCreateWithoutWishlistInput> | Prisma.WishlistItemCreateWithoutWishlistInput[] | Prisma.WishlistItemUncheckedCreateWithoutWishlistInput[];
    connectOrCreate?: Prisma.WishlistItemCreateOrConnectWithoutWishlistInput | Prisma.WishlistItemCreateOrConnectWithoutWishlistInput[];
    upsert?: Prisma.WishlistItemUpsertWithWhereUniqueWithoutWishlistInput | Prisma.WishlistItemUpsertWithWhereUniqueWithoutWishlistInput[];
    createMany?: Prisma.WishlistItemCreateManyWishlistInputEnvelope;
    set?: Prisma.WishlistItemWhereUniqueInput | Prisma.WishlistItemWhereUniqueInput[];
    disconnect?: Prisma.WishlistItemWhereUniqueInput | Prisma.WishlistItemWhereUniqueInput[];
    delete?: Prisma.WishlistItemWhereUniqueInput | Prisma.WishlistItemWhereUniqueInput[];
    connect?: Prisma.WishlistItemWhereUniqueInput | Prisma.WishlistItemWhereUniqueInput[];
    update?: Prisma.WishlistItemUpdateWithWhereUniqueWithoutWishlistInput | Prisma.WishlistItemUpdateWithWhereUniqueWithoutWishlistInput[];
    updateMany?: Prisma.WishlistItemUpdateManyWithWhereWithoutWishlistInput | Prisma.WishlistItemUpdateManyWithWhereWithoutWishlistInput[];
    deleteMany?: Prisma.WishlistItemScalarWhereInput | Prisma.WishlistItemScalarWhereInput[];
};
export type WishlistItemUncheckedUpdateManyWithoutWishlistNestedInput = {
    create?: Prisma.XOR<Prisma.WishlistItemCreateWithoutWishlistInput, Prisma.WishlistItemUncheckedCreateWithoutWishlistInput> | Prisma.WishlistItemCreateWithoutWishlistInput[] | Prisma.WishlistItemUncheckedCreateWithoutWishlistInput[];
    connectOrCreate?: Prisma.WishlistItemCreateOrConnectWithoutWishlistInput | Prisma.WishlistItemCreateOrConnectWithoutWishlistInput[];
    upsert?: Prisma.WishlistItemUpsertWithWhereUniqueWithoutWishlistInput | Prisma.WishlistItemUpsertWithWhereUniqueWithoutWishlistInput[];
    createMany?: Prisma.WishlistItemCreateManyWishlistInputEnvelope;
    set?: Prisma.WishlistItemWhereUniqueInput | Prisma.WishlistItemWhereUniqueInput[];
    disconnect?: Prisma.WishlistItemWhereUniqueInput | Prisma.WishlistItemWhereUniqueInput[];
    delete?: Prisma.WishlistItemWhereUniqueInput | Prisma.WishlistItemWhereUniqueInput[];
    connect?: Prisma.WishlistItemWhereUniqueInput | Prisma.WishlistItemWhereUniqueInput[];
    update?: Prisma.WishlistItemUpdateWithWhereUniqueWithoutWishlistInput | Prisma.WishlistItemUpdateWithWhereUniqueWithoutWishlistInput[];
    updateMany?: Prisma.WishlistItemUpdateManyWithWhereWithoutWishlistInput | Prisma.WishlistItemUpdateManyWithWhereWithoutWishlistInput[];
    deleteMany?: Prisma.WishlistItemScalarWhereInput | Prisma.WishlistItemScalarWhereInput[];
};
export type WishlistItemCreateWithoutProductInput = {
    id?: string;
    createdAt?: Date | string;
    wishlist: Prisma.WishlistCreateNestedOneWithoutItemsInput;
};
export type WishlistItemUncheckedCreateWithoutProductInput = {
    id?: string;
    wishlistId: string;
    createdAt?: Date | string;
};
export type WishlistItemCreateOrConnectWithoutProductInput = {
    where: Prisma.WishlistItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.WishlistItemCreateWithoutProductInput, Prisma.WishlistItemUncheckedCreateWithoutProductInput>;
};
export type WishlistItemCreateManyProductInputEnvelope = {
    data: Prisma.WishlistItemCreateManyProductInput | Prisma.WishlistItemCreateManyProductInput[];
    skipDuplicates?: boolean;
};
export type WishlistItemUpsertWithWhereUniqueWithoutProductInput = {
    where: Prisma.WishlistItemWhereUniqueInput;
    update: Prisma.XOR<Prisma.WishlistItemUpdateWithoutProductInput, Prisma.WishlistItemUncheckedUpdateWithoutProductInput>;
    create: Prisma.XOR<Prisma.WishlistItemCreateWithoutProductInput, Prisma.WishlistItemUncheckedCreateWithoutProductInput>;
};
export type WishlistItemUpdateWithWhereUniqueWithoutProductInput = {
    where: Prisma.WishlistItemWhereUniqueInput;
    data: Prisma.XOR<Prisma.WishlistItemUpdateWithoutProductInput, Prisma.WishlistItemUncheckedUpdateWithoutProductInput>;
};
export type WishlistItemUpdateManyWithWhereWithoutProductInput = {
    where: Prisma.WishlistItemScalarWhereInput;
    data: Prisma.XOR<Prisma.WishlistItemUpdateManyMutationInput, Prisma.WishlistItemUncheckedUpdateManyWithoutProductInput>;
};
export type WishlistItemScalarWhereInput = {
    AND?: Prisma.WishlistItemScalarWhereInput | Prisma.WishlistItemScalarWhereInput[];
    OR?: Prisma.WishlistItemScalarWhereInput[];
    NOT?: Prisma.WishlistItemScalarWhereInput | Prisma.WishlistItemScalarWhereInput[];
    id?: Prisma.StringFilter<"WishlistItem"> | string;
    wishlistId?: Prisma.StringFilter<"WishlistItem"> | string;
    productId?: Prisma.StringFilter<"WishlistItem"> | string;
    createdAt?: Prisma.DateTimeFilter<"WishlistItem"> | Date | string;
};
export type WishlistItemCreateWithoutWishlistInput = {
    id?: string;
    createdAt?: Date | string;
    product: Prisma.ProductCreateNestedOneWithoutWishlistItemsInput;
};
export type WishlistItemUncheckedCreateWithoutWishlistInput = {
    id?: string;
    productId: string;
    createdAt?: Date | string;
};
export type WishlistItemCreateOrConnectWithoutWishlistInput = {
    where: Prisma.WishlistItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.WishlistItemCreateWithoutWishlistInput, Prisma.WishlistItemUncheckedCreateWithoutWishlistInput>;
};
export type WishlistItemCreateManyWishlistInputEnvelope = {
    data: Prisma.WishlistItemCreateManyWishlistInput | Prisma.WishlistItemCreateManyWishlistInput[];
    skipDuplicates?: boolean;
};
export type WishlistItemUpsertWithWhereUniqueWithoutWishlistInput = {
    where: Prisma.WishlistItemWhereUniqueInput;
    update: Prisma.XOR<Prisma.WishlistItemUpdateWithoutWishlistInput, Prisma.WishlistItemUncheckedUpdateWithoutWishlistInput>;
    create: Prisma.XOR<Prisma.WishlistItemCreateWithoutWishlistInput, Prisma.WishlistItemUncheckedCreateWithoutWishlistInput>;
};
export type WishlistItemUpdateWithWhereUniqueWithoutWishlistInput = {
    where: Prisma.WishlistItemWhereUniqueInput;
    data: Prisma.XOR<Prisma.WishlistItemUpdateWithoutWishlistInput, Prisma.WishlistItemUncheckedUpdateWithoutWishlistInput>;
};
export type WishlistItemUpdateManyWithWhereWithoutWishlistInput = {
    where: Prisma.WishlistItemScalarWhereInput;
    data: Prisma.XOR<Prisma.WishlistItemUpdateManyMutationInput, Prisma.WishlistItemUncheckedUpdateManyWithoutWishlistInput>;
};
export type WishlistItemCreateManyProductInput = {
    id?: string;
    wishlistId: string;
    createdAt?: Date | string;
};
export type WishlistItemUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    wishlist?: Prisma.WishlistUpdateOneRequiredWithoutItemsNestedInput;
};
export type WishlistItemUncheckedUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wishlistId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WishlistItemUncheckedUpdateManyWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wishlistId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WishlistItemCreateManyWishlistInput = {
    id?: string;
    productId: string;
    createdAt?: Date | string;
};
export type WishlistItemUpdateWithoutWishlistInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    product?: Prisma.ProductUpdateOneRequiredWithoutWishlistItemsNestedInput;
};
export type WishlistItemUncheckedUpdateWithoutWishlistInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WishlistItemUncheckedUpdateManyWithoutWishlistInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WishlistItemSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    wishlistId?: boolean;
    productId?: boolean;
    createdAt?: boolean;
    wishlist?: boolean | Prisma.WishlistDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["wishlistItem"]>;
export type WishlistItemSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    wishlistId?: boolean;
    productId?: boolean;
    createdAt?: boolean;
    wishlist?: boolean | Prisma.WishlistDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["wishlistItem"]>;
export type WishlistItemSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    wishlistId?: boolean;
    productId?: boolean;
    createdAt?: boolean;
    wishlist?: boolean | Prisma.WishlistDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["wishlistItem"]>;
export type WishlistItemSelectScalar = {
    id?: boolean;
    wishlistId?: boolean;
    productId?: boolean;
    createdAt?: boolean;
};
export type WishlistItemOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "wishlistId" | "productId" | "createdAt", ExtArgs["result"]["wishlistItem"]>;
export type WishlistItemInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wishlist?: boolean | Prisma.WishlistDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type WishlistItemIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wishlist?: boolean | Prisma.WishlistDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type WishlistItemIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wishlist?: boolean | Prisma.WishlistDefaultArgs<ExtArgs>;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type $WishlistItemPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "WishlistItem";
    objects: {
        wishlist: Prisma.$WishlistPayload<ExtArgs>;
        product: Prisma.$ProductPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        wishlistId: string;
        productId: string;
        createdAt: Date;
    }, ExtArgs["result"]["wishlistItem"]>;
    composites: {};
};
export type WishlistItemGetPayload<S extends boolean | null | undefined | WishlistItemDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$WishlistItemPayload, S>;
export type WishlistItemCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<WishlistItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: WishlistItemCountAggregateInputType | true;
};
export interface WishlistItemDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['WishlistItem'];
        meta: {
            name: 'WishlistItem';
        };
    };
    findUnique<T extends WishlistItemFindUniqueArgs>(args: Prisma.SelectSubset<T, WishlistItemFindUniqueArgs<ExtArgs>>): Prisma.Prisma__WishlistItemClient<runtime.Types.Result.GetResult<Prisma.$WishlistItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends WishlistItemFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, WishlistItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__WishlistItemClient<runtime.Types.Result.GetResult<Prisma.$WishlistItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends WishlistItemFindFirstArgs>(args?: Prisma.SelectSubset<T, WishlistItemFindFirstArgs<ExtArgs>>): Prisma.Prisma__WishlistItemClient<runtime.Types.Result.GetResult<Prisma.$WishlistItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends WishlistItemFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, WishlistItemFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__WishlistItemClient<runtime.Types.Result.GetResult<Prisma.$WishlistItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends WishlistItemFindManyArgs>(args?: Prisma.SelectSubset<T, WishlistItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WishlistItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends WishlistItemCreateArgs>(args: Prisma.SelectSubset<T, WishlistItemCreateArgs<ExtArgs>>): Prisma.Prisma__WishlistItemClient<runtime.Types.Result.GetResult<Prisma.$WishlistItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends WishlistItemCreateManyArgs>(args?: Prisma.SelectSubset<T, WishlistItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends WishlistItemCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, WishlistItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WishlistItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends WishlistItemDeleteArgs>(args: Prisma.SelectSubset<T, WishlistItemDeleteArgs<ExtArgs>>): Prisma.Prisma__WishlistItemClient<runtime.Types.Result.GetResult<Prisma.$WishlistItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends WishlistItemUpdateArgs>(args: Prisma.SelectSubset<T, WishlistItemUpdateArgs<ExtArgs>>): Prisma.Prisma__WishlistItemClient<runtime.Types.Result.GetResult<Prisma.$WishlistItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends WishlistItemDeleteManyArgs>(args?: Prisma.SelectSubset<T, WishlistItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends WishlistItemUpdateManyArgs>(args: Prisma.SelectSubset<T, WishlistItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends WishlistItemUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, WishlistItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WishlistItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends WishlistItemUpsertArgs>(args: Prisma.SelectSubset<T, WishlistItemUpsertArgs<ExtArgs>>): Prisma.Prisma__WishlistItemClient<runtime.Types.Result.GetResult<Prisma.$WishlistItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends WishlistItemCountArgs>(args?: Prisma.Subset<T, WishlistItemCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], WishlistItemCountAggregateOutputType> : number>;
    aggregate<T extends WishlistItemAggregateArgs>(args: Prisma.Subset<T, WishlistItemAggregateArgs>): Prisma.PrismaPromise<GetWishlistItemAggregateType<T>>;
    groupBy<T extends WishlistItemGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: WishlistItemGroupByArgs['orderBy'];
    } : {
        orderBy?: WishlistItemGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, WishlistItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWishlistItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: WishlistItemFieldRefs;
}
export interface Prisma__WishlistItemClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    wishlist<T extends Prisma.WishlistDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WishlistDefaultArgs<ExtArgs>>): Prisma.Prisma__WishlistClient<runtime.Types.Result.GetResult<Prisma.$WishlistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    product<T extends Prisma.ProductDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductDefaultArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface WishlistItemFieldRefs {
    readonly id: Prisma.FieldRef<"WishlistItem", 'String'>;
    readonly wishlistId: Prisma.FieldRef<"WishlistItem", 'String'>;
    readonly productId: Prisma.FieldRef<"WishlistItem", 'String'>;
    readonly createdAt: Prisma.FieldRef<"WishlistItem", 'DateTime'>;
}
export type WishlistItemFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WishlistItemSelect<ExtArgs> | null;
    omit?: Prisma.WishlistItemOmit<ExtArgs> | null;
    include?: Prisma.WishlistItemInclude<ExtArgs> | null;
    where: Prisma.WishlistItemWhereUniqueInput;
};
export type WishlistItemFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WishlistItemSelect<ExtArgs> | null;
    omit?: Prisma.WishlistItemOmit<ExtArgs> | null;
    include?: Prisma.WishlistItemInclude<ExtArgs> | null;
    where: Prisma.WishlistItemWhereUniqueInput;
};
export type WishlistItemFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WishlistItemSelect<ExtArgs> | null;
    omit?: Prisma.WishlistItemOmit<ExtArgs> | null;
    include?: Prisma.WishlistItemInclude<ExtArgs> | null;
    where?: Prisma.WishlistItemWhereInput;
    orderBy?: Prisma.WishlistItemOrderByWithRelationInput | Prisma.WishlistItemOrderByWithRelationInput[];
    cursor?: Prisma.WishlistItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WishlistItemScalarFieldEnum | Prisma.WishlistItemScalarFieldEnum[];
};
export type WishlistItemFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WishlistItemSelect<ExtArgs> | null;
    omit?: Prisma.WishlistItemOmit<ExtArgs> | null;
    include?: Prisma.WishlistItemInclude<ExtArgs> | null;
    where?: Prisma.WishlistItemWhereInput;
    orderBy?: Prisma.WishlistItemOrderByWithRelationInput | Prisma.WishlistItemOrderByWithRelationInput[];
    cursor?: Prisma.WishlistItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WishlistItemScalarFieldEnum | Prisma.WishlistItemScalarFieldEnum[];
};
export type WishlistItemFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WishlistItemSelect<ExtArgs> | null;
    omit?: Prisma.WishlistItemOmit<ExtArgs> | null;
    include?: Prisma.WishlistItemInclude<ExtArgs> | null;
    where?: Prisma.WishlistItemWhereInput;
    orderBy?: Prisma.WishlistItemOrderByWithRelationInput | Prisma.WishlistItemOrderByWithRelationInput[];
    cursor?: Prisma.WishlistItemWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WishlistItemScalarFieldEnum | Prisma.WishlistItemScalarFieldEnum[];
};
export type WishlistItemCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WishlistItemSelect<ExtArgs> | null;
    omit?: Prisma.WishlistItemOmit<ExtArgs> | null;
    include?: Prisma.WishlistItemInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WishlistItemCreateInput, Prisma.WishlistItemUncheckedCreateInput>;
};
export type WishlistItemCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.WishlistItemCreateManyInput | Prisma.WishlistItemCreateManyInput[];
    skipDuplicates?: boolean;
};
export type WishlistItemCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WishlistItemSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WishlistItemOmit<ExtArgs> | null;
    data: Prisma.WishlistItemCreateManyInput | Prisma.WishlistItemCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.WishlistItemIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type WishlistItemUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WishlistItemSelect<ExtArgs> | null;
    omit?: Prisma.WishlistItemOmit<ExtArgs> | null;
    include?: Prisma.WishlistItemInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WishlistItemUpdateInput, Prisma.WishlistItemUncheckedUpdateInput>;
    where: Prisma.WishlistItemWhereUniqueInput;
};
export type WishlistItemUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.WishlistItemUpdateManyMutationInput, Prisma.WishlistItemUncheckedUpdateManyInput>;
    where?: Prisma.WishlistItemWhereInput;
    limit?: number;
};
export type WishlistItemUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WishlistItemSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WishlistItemOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WishlistItemUpdateManyMutationInput, Prisma.WishlistItemUncheckedUpdateManyInput>;
    where?: Prisma.WishlistItemWhereInput;
    limit?: number;
    include?: Prisma.WishlistItemIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type WishlistItemUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WishlistItemSelect<ExtArgs> | null;
    omit?: Prisma.WishlistItemOmit<ExtArgs> | null;
    include?: Prisma.WishlistItemInclude<ExtArgs> | null;
    where: Prisma.WishlistItemWhereUniqueInput;
    create: Prisma.XOR<Prisma.WishlistItemCreateInput, Prisma.WishlistItemUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.WishlistItemUpdateInput, Prisma.WishlistItemUncheckedUpdateInput>;
};
export type WishlistItemDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WishlistItemSelect<ExtArgs> | null;
    omit?: Prisma.WishlistItemOmit<ExtArgs> | null;
    include?: Prisma.WishlistItemInclude<ExtArgs> | null;
    where: Prisma.WishlistItemWhereUniqueInput;
};
export type WishlistItemDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WishlistItemWhereInput;
    limit?: number;
};
export type WishlistItemDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WishlistItemSelect<ExtArgs> | null;
    omit?: Prisma.WishlistItemOmit<ExtArgs> | null;
    include?: Prisma.WishlistItemInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=WishlistItem.d.ts.map