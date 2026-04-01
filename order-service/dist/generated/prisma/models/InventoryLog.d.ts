import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type InventoryLogModel = runtime.Types.Result.DefaultSelection<Prisma.$InventoryLogPayload>;
export type AggregateInventoryLog = {
    _count: InventoryLogCountAggregateOutputType | null;
    _avg: InventoryLogAvgAggregateOutputType | null;
    _sum: InventoryLogSumAggregateOutputType | null;
    _min: InventoryLogMinAggregateOutputType | null;
    _max: InventoryLogMaxAggregateOutputType | null;
};
export type InventoryLogAvgAggregateOutputType = {
    quantity: number | null;
};
export type InventoryLogSumAggregateOutputType = {
    quantity: number | null;
};
export type InventoryLogMinAggregateOutputType = {
    id: string | null;
    productId: string | null;
    quantity: number | null;
    type: string | null;
    description: string | null;
    createdAt: Date | null;
    createdBy: string | null;
};
export type InventoryLogMaxAggregateOutputType = {
    id: string | null;
    productId: string | null;
    quantity: number | null;
    type: string | null;
    description: string | null;
    createdAt: Date | null;
    createdBy: string | null;
};
export type InventoryLogCountAggregateOutputType = {
    id: number;
    productId: number;
    quantity: number;
    type: number;
    description: number;
    createdAt: number;
    createdBy: number;
    _all: number;
};
export type InventoryLogAvgAggregateInputType = {
    quantity?: true;
};
export type InventoryLogSumAggregateInputType = {
    quantity?: true;
};
export type InventoryLogMinAggregateInputType = {
    id?: true;
    productId?: true;
    quantity?: true;
    type?: true;
    description?: true;
    createdAt?: true;
    createdBy?: true;
};
export type InventoryLogMaxAggregateInputType = {
    id?: true;
    productId?: true;
    quantity?: true;
    type?: true;
    description?: true;
    createdAt?: true;
    createdBy?: true;
};
export type InventoryLogCountAggregateInputType = {
    id?: true;
    productId?: true;
    quantity?: true;
    type?: true;
    description?: true;
    createdAt?: true;
    createdBy?: true;
    _all?: true;
};
export type InventoryLogAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InventoryLogWhereInput;
    orderBy?: Prisma.InventoryLogOrderByWithRelationInput | Prisma.InventoryLogOrderByWithRelationInput[];
    cursor?: Prisma.InventoryLogWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | InventoryLogCountAggregateInputType;
    _avg?: InventoryLogAvgAggregateInputType;
    _sum?: InventoryLogSumAggregateInputType;
    _min?: InventoryLogMinAggregateInputType;
    _max?: InventoryLogMaxAggregateInputType;
};
export type GetInventoryLogAggregateType<T extends InventoryLogAggregateArgs> = {
    [P in keyof T & keyof AggregateInventoryLog]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateInventoryLog[P]> : Prisma.GetScalarType<T[P], AggregateInventoryLog[P]>;
};
export type InventoryLogGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InventoryLogWhereInput;
    orderBy?: Prisma.InventoryLogOrderByWithAggregationInput | Prisma.InventoryLogOrderByWithAggregationInput[];
    by: Prisma.InventoryLogScalarFieldEnum[] | Prisma.InventoryLogScalarFieldEnum;
    having?: Prisma.InventoryLogScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InventoryLogCountAggregateInputType | true;
    _avg?: InventoryLogAvgAggregateInputType;
    _sum?: InventoryLogSumAggregateInputType;
    _min?: InventoryLogMinAggregateInputType;
    _max?: InventoryLogMaxAggregateInputType;
};
export type InventoryLogGroupByOutputType = {
    id: string;
    productId: string;
    quantity: number;
    type: string;
    description: string | null;
    createdAt: Date;
    createdBy: string | null;
    _count: InventoryLogCountAggregateOutputType | null;
    _avg: InventoryLogAvgAggregateOutputType | null;
    _sum: InventoryLogSumAggregateOutputType | null;
    _min: InventoryLogMinAggregateOutputType | null;
    _max: InventoryLogMaxAggregateOutputType | null;
};
type GetInventoryLogGroupByPayload<T extends InventoryLogGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<InventoryLogGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof InventoryLogGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], InventoryLogGroupByOutputType[P]> : Prisma.GetScalarType<T[P], InventoryLogGroupByOutputType[P]>;
}>>;
export type InventoryLogWhereInput = {
    AND?: Prisma.InventoryLogWhereInput | Prisma.InventoryLogWhereInput[];
    OR?: Prisma.InventoryLogWhereInput[];
    NOT?: Prisma.InventoryLogWhereInput | Prisma.InventoryLogWhereInput[];
    id?: Prisma.StringFilter<"InventoryLog"> | string;
    productId?: Prisma.StringFilter<"InventoryLog"> | string;
    quantity?: Prisma.IntFilter<"InventoryLog"> | number;
    type?: Prisma.StringFilter<"InventoryLog"> | string;
    description?: Prisma.StringNullableFilter<"InventoryLog"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"InventoryLog"> | Date | string;
    createdBy?: Prisma.StringNullableFilter<"InventoryLog"> | string | null;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
};
export type InventoryLogOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    createdBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    product?: Prisma.ProductOrderByWithRelationInput;
};
export type InventoryLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.InventoryLogWhereInput | Prisma.InventoryLogWhereInput[];
    OR?: Prisma.InventoryLogWhereInput[];
    NOT?: Prisma.InventoryLogWhereInput | Prisma.InventoryLogWhereInput[];
    productId?: Prisma.StringFilter<"InventoryLog"> | string;
    quantity?: Prisma.IntFilter<"InventoryLog"> | number;
    type?: Prisma.StringFilter<"InventoryLog"> | string;
    description?: Prisma.StringNullableFilter<"InventoryLog"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"InventoryLog"> | Date | string;
    createdBy?: Prisma.StringNullableFilter<"InventoryLog"> | string | null;
    product?: Prisma.XOR<Prisma.ProductScalarRelationFilter, Prisma.ProductWhereInput>;
}, "id">;
export type InventoryLogOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    createdBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.InventoryLogCountOrderByAggregateInput;
    _avg?: Prisma.InventoryLogAvgOrderByAggregateInput;
    _max?: Prisma.InventoryLogMaxOrderByAggregateInput;
    _min?: Prisma.InventoryLogMinOrderByAggregateInput;
    _sum?: Prisma.InventoryLogSumOrderByAggregateInput;
};
export type InventoryLogScalarWhereWithAggregatesInput = {
    AND?: Prisma.InventoryLogScalarWhereWithAggregatesInput | Prisma.InventoryLogScalarWhereWithAggregatesInput[];
    OR?: Prisma.InventoryLogScalarWhereWithAggregatesInput[];
    NOT?: Prisma.InventoryLogScalarWhereWithAggregatesInput | Prisma.InventoryLogScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"InventoryLog"> | string;
    productId?: Prisma.StringWithAggregatesFilter<"InventoryLog"> | string;
    quantity?: Prisma.IntWithAggregatesFilter<"InventoryLog"> | number;
    type?: Prisma.StringWithAggregatesFilter<"InventoryLog"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"InventoryLog"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"InventoryLog"> | Date | string;
    createdBy?: Prisma.StringNullableWithAggregatesFilter<"InventoryLog"> | string | null;
};
export type InventoryLogCreateInput = {
    id?: string;
    quantity: number;
    type: string;
    description?: string | null;
    createdAt?: Date | string;
    createdBy?: string | null;
    product: Prisma.ProductCreateNestedOneWithoutInventoryLogsInput;
};
export type InventoryLogUncheckedCreateInput = {
    id?: string;
    productId: string;
    quantity: number;
    type: string;
    description?: string | null;
    createdAt?: Date | string;
    createdBy?: string | null;
};
export type InventoryLogUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    product?: Prisma.ProductUpdateOneRequiredWithoutInventoryLogsNestedInput;
};
export type InventoryLogUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type InventoryLogCreateManyInput = {
    id?: string;
    productId: string;
    quantity: number;
    type: string;
    description?: string | null;
    createdAt?: Date | string;
    createdBy?: string | null;
};
export type InventoryLogUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type InventoryLogUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    productId?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type InventoryLogListRelationFilter = {
    every?: Prisma.InventoryLogWhereInput;
    some?: Prisma.InventoryLogWhereInput;
    none?: Prisma.InventoryLogWhereInput;
};
export type InventoryLogOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type InventoryLogCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    createdBy?: Prisma.SortOrder;
};
export type InventoryLogAvgOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
};
export type InventoryLogMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    createdBy?: Prisma.SortOrder;
};
export type InventoryLogMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    productId?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    createdBy?: Prisma.SortOrder;
};
export type InventoryLogSumOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
};
export type InventoryLogCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.InventoryLogCreateWithoutProductInput, Prisma.InventoryLogUncheckedCreateWithoutProductInput> | Prisma.InventoryLogCreateWithoutProductInput[] | Prisma.InventoryLogUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.InventoryLogCreateOrConnectWithoutProductInput | Prisma.InventoryLogCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.InventoryLogCreateManyProductInputEnvelope;
    connect?: Prisma.InventoryLogWhereUniqueInput | Prisma.InventoryLogWhereUniqueInput[];
};
export type InventoryLogUncheckedCreateNestedManyWithoutProductInput = {
    create?: Prisma.XOR<Prisma.InventoryLogCreateWithoutProductInput, Prisma.InventoryLogUncheckedCreateWithoutProductInput> | Prisma.InventoryLogCreateWithoutProductInput[] | Prisma.InventoryLogUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.InventoryLogCreateOrConnectWithoutProductInput | Prisma.InventoryLogCreateOrConnectWithoutProductInput[];
    createMany?: Prisma.InventoryLogCreateManyProductInputEnvelope;
    connect?: Prisma.InventoryLogWhereUniqueInput | Prisma.InventoryLogWhereUniqueInput[];
};
export type InventoryLogUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.InventoryLogCreateWithoutProductInput, Prisma.InventoryLogUncheckedCreateWithoutProductInput> | Prisma.InventoryLogCreateWithoutProductInput[] | Prisma.InventoryLogUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.InventoryLogCreateOrConnectWithoutProductInput | Prisma.InventoryLogCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.InventoryLogUpsertWithWhereUniqueWithoutProductInput | Prisma.InventoryLogUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.InventoryLogCreateManyProductInputEnvelope;
    set?: Prisma.InventoryLogWhereUniqueInput | Prisma.InventoryLogWhereUniqueInput[];
    disconnect?: Prisma.InventoryLogWhereUniqueInput | Prisma.InventoryLogWhereUniqueInput[];
    delete?: Prisma.InventoryLogWhereUniqueInput | Prisma.InventoryLogWhereUniqueInput[];
    connect?: Prisma.InventoryLogWhereUniqueInput | Prisma.InventoryLogWhereUniqueInput[];
    update?: Prisma.InventoryLogUpdateWithWhereUniqueWithoutProductInput | Prisma.InventoryLogUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.InventoryLogUpdateManyWithWhereWithoutProductInput | Prisma.InventoryLogUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.InventoryLogScalarWhereInput | Prisma.InventoryLogScalarWhereInput[];
};
export type InventoryLogUncheckedUpdateManyWithoutProductNestedInput = {
    create?: Prisma.XOR<Prisma.InventoryLogCreateWithoutProductInput, Prisma.InventoryLogUncheckedCreateWithoutProductInput> | Prisma.InventoryLogCreateWithoutProductInput[] | Prisma.InventoryLogUncheckedCreateWithoutProductInput[];
    connectOrCreate?: Prisma.InventoryLogCreateOrConnectWithoutProductInput | Prisma.InventoryLogCreateOrConnectWithoutProductInput[];
    upsert?: Prisma.InventoryLogUpsertWithWhereUniqueWithoutProductInput | Prisma.InventoryLogUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: Prisma.InventoryLogCreateManyProductInputEnvelope;
    set?: Prisma.InventoryLogWhereUniqueInput | Prisma.InventoryLogWhereUniqueInput[];
    disconnect?: Prisma.InventoryLogWhereUniqueInput | Prisma.InventoryLogWhereUniqueInput[];
    delete?: Prisma.InventoryLogWhereUniqueInput | Prisma.InventoryLogWhereUniqueInput[];
    connect?: Prisma.InventoryLogWhereUniqueInput | Prisma.InventoryLogWhereUniqueInput[];
    update?: Prisma.InventoryLogUpdateWithWhereUniqueWithoutProductInput | Prisma.InventoryLogUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?: Prisma.InventoryLogUpdateManyWithWhereWithoutProductInput | Prisma.InventoryLogUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: Prisma.InventoryLogScalarWhereInput | Prisma.InventoryLogScalarWhereInput[];
};
export type InventoryLogCreateWithoutProductInput = {
    id?: string;
    quantity: number;
    type: string;
    description?: string | null;
    createdAt?: Date | string;
    createdBy?: string | null;
};
export type InventoryLogUncheckedCreateWithoutProductInput = {
    id?: string;
    quantity: number;
    type: string;
    description?: string | null;
    createdAt?: Date | string;
    createdBy?: string | null;
};
export type InventoryLogCreateOrConnectWithoutProductInput = {
    where: Prisma.InventoryLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.InventoryLogCreateWithoutProductInput, Prisma.InventoryLogUncheckedCreateWithoutProductInput>;
};
export type InventoryLogCreateManyProductInputEnvelope = {
    data: Prisma.InventoryLogCreateManyProductInput | Prisma.InventoryLogCreateManyProductInput[];
    skipDuplicates?: boolean;
};
export type InventoryLogUpsertWithWhereUniqueWithoutProductInput = {
    where: Prisma.InventoryLogWhereUniqueInput;
    update: Prisma.XOR<Prisma.InventoryLogUpdateWithoutProductInput, Prisma.InventoryLogUncheckedUpdateWithoutProductInput>;
    create: Prisma.XOR<Prisma.InventoryLogCreateWithoutProductInput, Prisma.InventoryLogUncheckedCreateWithoutProductInput>;
};
export type InventoryLogUpdateWithWhereUniqueWithoutProductInput = {
    where: Prisma.InventoryLogWhereUniqueInput;
    data: Prisma.XOR<Prisma.InventoryLogUpdateWithoutProductInput, Prisma.InventoryLogUncheckedUpdateWithoutProductInput>;
};
export type InventoryLogUpdateManyWithWhereWithoutProductInput = {
    where: Prisma.InventoryLogScalarWhereInput;
    data: Prisma.XOR<Prisma.InventoryLogUpdateManyMutationInput, Prisma.InventoryLogUncheckedUpdateManyWithoutProductInput>;
};
export type InventoryLogScalarWhereInput = {
    AND?: Prisma.InventoryLogScalarWhereInput | Prisma.InventoryLogScalarWhereInput[];
    OR?: Prisma.InventoryLogScalarWhereInput[];
    NOT?: Prisma.InventoryLogScalarWhereInput | Prisma.InventoryLogScalarWhereInput[];
    id?: Prisma.StringFilter<"InventoryLog"> | string;
    productId?: Prisma.StringFilter<"InventoryLog"> | string;
    quantity?: Prisma.IntFilter<"InventoryLog"> | number;
    type?: Prisma.StringFilter<"InventoryLog"> | string;
    description?: Prisma.StringNullableFilter<"InventoryLog"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"InventoryLog"> | Date | string;
    createdBy?: Prisma.StringNullableFilter<"InventoryLog"> | string | null;
};
export type InventoryLogCreateManyProductInput = {
    id?: string;
    quantity: number;
    type: string;
    description?: string | null;
    createdAt?: Date | string;
    createdBy?: string | null;
};
export type InventoryLogUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type InventoryLogUncheckedUpdateWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type InventoryLogUncheckedUpdateManyWithoutProductInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type InventoryLogSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productId?: boolean;
    quantity?: boolean;
    type?: boolean;
    description?: boolean;
    createdAt?: boolean;
    createdBy?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["inventoryLog"]>;
export type InventoryLogSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productId?: boolean;
    quantity?: boolean;
    type?: boolean;
    description?: boolean;
    createdAt?: boolean;
    createdBy?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["inventoryLog"]>;
export type InventoryLogSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    productId?: boolean;
    quantity?: boolean;
    type?: boolean;
    description?: boolean;
    createdAt?: boolean;
    createdBy?: boolean;
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["inventoryLog"]>;
export type InventoryLogSelectScalar = {
    id?: boolean;
    productId?: boolean;
    quantity?: boolean;
    type?: boolean;
    description?: boolean;
    createdAt?: boolean;
    createdBy?: boolean;
};
export type InventoryLogOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "productId" | "quantity" | "type" | "description" | "createdAt" | "createdBy", ExtArgs["result"]["inventoryLog"]>;
export type InventoryLogInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type InventoryLogIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type InventoryLogIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    product?: boolean | Prisma.ProductDefaultArgs<ExtArgs>;
};
export type $InventoryLogPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "InventoryLog";
    objects: {
        product: Prisma.$ProductPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        productId: string;
        quantity: number;
        type: string;
        description: string | null;
        createdAt: Date;
        createdBy: string | null;
    }, ExtArgs["result"]["inventoryLog"]>;
    composites: {};
};
export type InventoryLogGetPayload<S extends boolean | null | undefined | InventoryLogDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$InventoryLogPayload, S>;
export type InventoryLogCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<InventoryLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: InventoryLogCountAggregateInputType | true;
};
export interface InventoryLogDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['InventoryLog'];
        meta: {
            name: 'InventoryLog';
        };
    };
    findUnique<T extends InventoryLogFindUniqueArgs>(args: Prisma.SelectSubset<T, InventoryLogFindUniqueArgs<ExtArgs>>): Prisma.Prisma__InventoryLogClient<runtime.Types.Result.GetResult<Prisma.$InventoryLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends InventoryLogFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, InventoryLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__InventoryLogClient<runtime.Types.Result.GetResult<Prisma.$InventoryLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends InventoryLogFindFirstArgs>(args?: Prisma.SelectSubset<T, InventoryLogFindFirstArgs<ExtArgs>>): Prisma.Prisma__InventoryLogClient<runtime.Types.Result.GetResult<Prisma.$InventoryLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends InventoryLogFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, InventoryLogFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__InventoryLogClient<runtime.Types.Result.GetResult<Prisma.$InventoryLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends InventoryLogFindManyArgs>(args?: Prisma.SelectSubset<T, InventoryLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InventoryLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends InventoryLogCreateArgs>(args: Prisma.SelectSubset<T, InventoryLogCreateArgs<ExtArgs>>): Prisma.Prisma__InventoryLogClient<runtime.Types.Result.GetResult<Prisma.$InventoryLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends InventoryLogCreateManyArgs>(args?: Prisma.SelectSubset<T, InventoryLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends InventoryLogCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, InventoryLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InventoryLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends InventoryLogDeleteArgs>(args: Prisma.SelectSubset<T, InventoryLogDeleteArgs<ExtArgs>>): Prisma.Prisma__InventoryLogClient<runtime.Types.Result.GetResult<Prisma.$InventoryLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends InventoryLogUpdateArgs>(args: Prisma.SelectSubset<T, InventoryLogUpdateArgs<ExtArgs>>): Prisma.Prisma__InventoryLogClient<runtime.Types.Result.GetResult<Prisma.$InventoryLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends InventoryLogDeleteManyArgs>(args?: Prisma.SelectSubset<T, InventoryLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends InventoryLogUpdateManyArgs>(args: Prisma.SelectSubset<T, InventoryLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends InventoryLogUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, InventoryLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InventoryLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends InventoryLogUpsertArgs>(args: Prisma.SelectSubset<T, InventoryLogUpsertArgs<ExtArgs>>): Prisma.Prisma__InventoryLogClient<runtime.Types.Result.GetResult<Prisma.$InventoryLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends InventoryLogCountArgs>(args?: Prisma.Subset<T, InventoryLogCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], InventoryLogCountAggregateOutputType> : number>;
    aggregate<T extends InventoryLogAggregateArgs>(args: Prisma.Subset<T, InventoryLogAggregateArgs>): Prisma.PrismaPromise<GetInventoryLogAggregateType<T>>;
    groupBy<T extends InventoryLogGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: InventoryLogGroupByArgs['orderBy'];
    } : {
        orderBy?: InventoryLogGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, InventoryLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: InventoryLogFieldRefs;
}
export interface Prisma__InventoryLogClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    product<T extends Prisma.ProductDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProductDefaultArgs<ExtArgs>>): Prisma.Prisma__ProductClient<runtime.Types.Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface InventoryLogFieldRefs {
    readonly id: Prisma.FieldRef<"InventoryLog", 'String'>;
    readonly productId: Prisma.FieldRef<"InventoryLog", 'String'>;
    readonly quantity: Prisma.FieldRef<"InventoryLog", 'Int'>;
    readonly type: Prisma.FieldRef<"InventoryLog", 'String'>;
    readonly description: Prisma.FieldRef<"InventoryLog", 'String'>;
    readonly createdAt: Prisma.FieldRef<"InventoryLog", 'DateTime'>;
    readonly createdBy: Prisma.FieldRef<"InventoryLog", 'String'>;
}
export type InventoryLogFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventoryLogSelect<ExtArgs> | null;
    omit?: Prisma.InventoryLogOmit<ExtArgs> | null;
    include?: Prisma.InventoryLogInclude<ExtArgs> | null;
    where: Prisma.InventoryLogWhereUniqueInput;
};
export type InventoryLogFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventoryLogSelect<ExtArgs> | null;
    omit?: Prisma.InventoryLogOmit<ExtArgs> | null;
    include?: Prisma.InventoryLogInclude<ExtArgs> | null;
    where: Prisma.InventoryLogWhereUniqueInput;
};
export type InventoryLogFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventoryLogSelect<ExtArgs> | null;
    omit?: Prisma.InventoryLogOmit<ExtArgs> | null;
    include?: Prisma.InventoryLogInclude<ExtArgs> | null;
    where?: Prisma.InventoryLogWhereInput;
    orderBy?: Prisma.InventoryLogOrderByWithRelationInput | Prisma.InventoryLogOrderByWithRelationInput[];
    cursor?: Prisma.InventoryLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InventoryLogScalarFieldEnum | Prisma.InventoryLogScalarFieldEnum[];
};
export type InventoryLogFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventoryLogSelect<ExtArgs> | null;
    omit?: Prisma.InventoryLogOmit<ExtArgs> | null;
    include?: Prisma.InventoryLogInclude<ExtArgs> | null;
    where?: Prisma.InventoryLogWhereInput;
    orderBy?: Prisma.InventoryLogOrderByWithRelationInput | Prisma.InventoryLogOrderByWithRelationInput[];
    cursor?: Prisma.InventoryLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InventoryLogScalarFieldEnum | Prisma.InventoryLogScalarFieldEnum[];
};
export type InventoryLogFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventoryLogSelect<ExtArgs> | null;
    omit?: Prisma.InventoryLogOmit<ExtArgs> | null;
    include?: Prisma.InventoryLogInclude<ExtArgs> | null;
    where?: Prisma.InventoryLogWhereInput;
    orderBy?: Prisma.InventoryLogOrderByWithRelationInput | Prisma.InventoryLogOrderByWithRelationInput[];
    cursor?: Prisma.InventoryLogWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InventoryLogScalarFieldEnum | Prisma.InventoryLogScalarFieldEnum[];
};
export type InventoryLogCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventoryLogSelect<ExtArgs> | null;
    omit?: Prisma.InventoryLogOmit<ExtArgs> | null;
    include?: Prisma.InventoryLogInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InventoryLogCreateInput, Prisma.InventoryLogUncheckedCreateInput>;
};
export type InventoryLogCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.InventoryLogCreateManyInput | Prisma.InventoryLogCreateManyInput[];
    skipDuplicates?: boolean;
};
export type InventoryLogCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventoryLogSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InventoryLogOmit<ExtArgs> | null;
    data: Prisma.InventoryLogCreateManyInput | Prisma.InventoryLogCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.InventoryLogIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type InventoryLogUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventoryLogSelect<ExtArgs> | null;
    omit?: Prisma.InventoryLogOmit<ExtArgs> | null;
    include?: Prisma.InventoryLogInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InventoryLogUpdateInput, Prisma.InventoryLogUncheckedUpdateInput>;
    where: Prisma.InventoryLogWhereUniqueInput;
};
export type InventoryLogUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.InventoryLogUpdateManyMutationInput, Prisma.InventoryLogUncheckedUpdateManyInput>;
    where?: Prisma.InventoryLogWhereInput;
    limit?: number;
};
export type InventoryLogUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventoryLogSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InventoryLogOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InventoryLogUpdateManyMutationInput, Prisma.InventoryLogUncheckedUpdateManyInput>;
    where?: Prisma.InventoryLogWhereInput;
    limit?: number;
    include?: Prisma.InventoryLogIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type InventoryLogUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventoryLogSelect<ExtArgs> | null;
    omit?: Prisma.InventoryLogOmit<ExtArgs> | null;
    include?: Prisma.InventoryLogInclude<ExtArgs> | null;
    where: Prisma.InventoryLogWhereUniqueInput;
    create: Prisma.XOR<Prisma.InventoryLogCreateInput, Prisma.InventoryLogUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.InventoryLogUpdateInput, Prisma.InventoryLogUncheckedUpdateInput>;
};
export type InventoryLogDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventoryLogSelect<ExtArgs> | null;
    omit?: Prisma.InventoryLogOmit<ExtArgs> | null;
    include?: Prisma.InventoryLogInclude<ExtArgs> | null;
    where: Prisma.InventoryLogWhereUniqueInput;
};
export type InventoryLogDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InventoryLogWhereInput;
    limit?: number;
};
export type InventoryLogDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InventoryLogSelect<ExtArgs> | null;
    omit?: Prisma.InventoryLogOmit<ExtArgs> | null;
    include?: Prisma.InventoryLogInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=InventoryLog.d.ts.map