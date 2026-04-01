import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CouponModel = runtime.Types.Result.DefaultSelection<Prisma.$CouponPayload>;
export type AggregateCoupon = {
    _count: CouponCountAggregateOutputType | null;
    _avg: CouponAvgAggregateOutputType | null;
    _sum: CouponSumAggregateOutputType | null;
    _min: CouponMinAggregateOutputType | null;
    _max: CouponMaxAggregateOutputType | null;
};
export type CouponAvgAggregateOutputType = {
    value: runtime.Decimal | null;
    minAmount: runtime.Decimal | null;
    maxAmount: runtime.Decimal | null;
    usageLimit: number | null;
    usageCount: number | null;
};
export type CouponSumAggregateOutputType = {
    value: runtime.Decimal | null;
    minAmount: runtime.Decimal | null;
    maxAmount: runtime.Decimal | null;
    usageLimit: number | null;
    usageCount: number | null;
};
export type CouponMinAggregateOutputType = {
    id: string | null;
    code: string | null;
    type: $Enums.CouponType | null;
    value: runtime.Decimal | null;
    minAmount: runtime.Decimal | null;
    maxAmount: runtime.Decimal | null;
    startDate: Date | null;
    endDate: Date | null;
    isActive: boolean | null;
    usageLimit: number | null;
    usageCount: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CouponMaxAggregateOutputType = {
    id: string | null;
    code: string | null;
    type: $Enums.CouponType | null;
    value: runtime.Decimal | null;
    minAmount: runtime.Decimal | null;
    maxAmount: runtime.Decimal | null;
    startDate: Date | null;
    endDate: Date | null;
    isActive: boolean | null;
    usageLimit: number | null;
    usageCount: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type CouponCountAggregateOutputType = {
    id: number;
    code: number;
    type: number;
    value: number;
    minAmount: number;
    maxAmount: number;
    startDate: number;
    endDate: number;
    isActive: number;
    usageLimit: number;
    usageCount: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type CouponAvgAggregateInputType = {
    value?: true;
    minAmount?: true;
    maxAmount?: true;
    usageLimit?: true;
    usageCount?: true;
};
export type CouponSumAggregateInputType = {
    value?: true;
    minAmount?: true;
    maxAmount?: true;
    usageLimit?: true;
    usageCount?: true;
};
export type CouponMinAggregateInputType = {
    id?: true;
    code?: true;
    type?: true;
    value?: true;
    minAmount?: true;
    maxAmount?: true;
    startDate?: true;
    endDate?: true;
    isActive?: true;
    usageLimit?: true;
    usageCount?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CouponMaxAggregateInputType = {
    id?: true;
    code?: true;
    type?: true;
    value?: true;
    minAmount?: true;
    maxAmount?: true;
    startDate?: true;
    endDate?: true;
    isActive?: true;
    usageLimit?: true;
    usageCount?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type CouponCountAggregateInputType = {
    id?: true;
    code?: true;
    type?: true;
    value?: true;
    minAmount?: true;
    maxAmount?: true;
    startDate?: true;
    endDate?: true;
    isActive?: true;
    usageLimit?: true;
    usageCount?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type CouponAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CouponWhereInput;
    orderBy?: Prisma.CouponOrderByWithRelationInput | Prisma.CouponOrderByWithRelationInput[];
    cursor?: Prisma.CouponWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CouponCountAggregateInputType;
    _avg?: CouponAvgAggregateInputType;
    _sum?: CouponSumAggregateInputType;
    _min?: CouponMinAggregateInputType;
    _max?: CouponMaxAggregateInputType;
};
export type GetCouponAggregateType<T extends CouponAggregateArgs> = {
    [P in keyof T & keyof AggregateCoupon]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCoupon[P]> : Prisma.GetScalarType<T[P], AggregateCoupon[P]>;
};
export type CouponGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CouponWhereInput;
    orderBy?: Prisma.CouponOrderByWithAggregationInput | Prisma.CouponOrderByWithAggregationInput[];
    by: Prisma.CouponScalarFieldEnum[] | Prisma.CouponScalarFieldEnum;
    having?: Prisma.CouponScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CouponCountAggregateInputType | true;
    _avg?: CouponAvgAggregateInputType;
    _sum?: CouponSumAggregateInputType;
    _min?: CouponMinAggregateInputType;
    _max?: CouponMaxAggregateInputType;
};
export type CouponGroupByOutputType = {
    id: string;
    code: string;
    type: $Enums.CouponType;
    value: runtime.Decimal;
    minAmount: runtime.Decimal | null;
    maxAmount: runtime.Decimal | null;
    startDate: Date;
    endDate: Date;
    isActive: boolean;
    usageLimit: number | null;
    usageCount: number;
    createdAt: Date;
    updatedAt: Date;
    _count: CouponCountAggregateOutputType | null;
    _avg: CouponAvgAggregateOutputType | null;
    _sum: CouponSumAggregateOutputType | null;
    _min: CouponMinAggregateOutputType | null;
    _max: CouponMaxAggregateOutputType | null;
};
type GetCouponGroupByPayload<T extends CouponGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CouponGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CouponGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CouponGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CouponGroupByOutputType[P]>;
}>>;
export type CouponWhereInput = {
    AND?: Prisma.CouponWhereInput | Prisma.CouponWhereInput[];
    OR?: Prisma.CouponWhereInput[];
    NOT?: Prisma.CouponWhereInput | Prisma.CouponWhereInput[];
    id?: Prisma.StringFilter<"Coupon"> | string;
    code?: Prisma.StringFilter<"Coupon"> | string;
    type?: Prisma.EnumCouponTypeFilter<"Coupon"> | $Enums.CouponType;
    value?: Prisma.DecimalFilter<"Coupon"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    minAmount?: Prisma.DecimalNullableFilter<"Coupon"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    maxAmount?: Prisma.DecimalNullableFilter<"Coupon"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    startDate?: Prisma.DateTimeFilter<"Coupon"> | Date | string;
    endDate?: Prisma.DateTimeFilter<"Coupon"> | Date | string;
    isActive?: Prisma.BoolFilter<"Coupon"> | boolean;
    usageLimit?: Prisma.IntNullableFilter<"Coupon"> | number | null;
    usageCount?: Prisma.IntFilter<"Coupon"> | number;
    createdAt?: Prisma.DateTimeFilter<"Coupon"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Coupon"> | Date | string;
    orders?: Prisma.OrderListRelationFilter;
};
export type CouponOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    minAmount?: Prisma.SortOrderInput | Prisma.SortOrder;
    maxAmount?: Prisma.SortOrderInput | Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    usageLimit?: Prisma.SortOrderInput | Prisma.SortOrder;
    usageCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    orders?: Prisma.OrderOrderByRelationAggregateInput;
};
export type CouponWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    code?: string;
    AND?: Prisma.CouponWhereInput | Prisma.CouponWhereInput[];
    OR?: Prisma.CouponWhereInput[];
    NOT?: Prisma.CouponWhereInput | Prisma.CouponWhereInput[];
    type?: Prisma.EnumCouponTypeFilter<"Coupon"> | $Enums.CouponType;
    value?: Prisma.DecimalFilter<"Coupon"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    minAmount?: Prisma.DecimalNullableFilter<"Coupon"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    maxAmount?: Prisma.DecimalNullableFilter<"Coupon"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    startDate?: Prisma.DateTimeFilter<"Coupon"> | Date | string;
    endDate?: Prisma.DateTimeFilter<"Coupon"> | Date | string;
    isActive?: Prisma.BoolFilter<"Coupon"> | boolean;
    usageLimit?: Prisma.IntNullableFilter<"Coupon"> | number | null;
    usageCount?: Prisma.IntFilter<"Coupon"> | number;
    createdAt?: Prisma.DateTimeFilter<"Coupon"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Coupon"> | Date | string;
    orders?: Prisma.OrderListRelationFilter;
}, "id" | "code">;
export type CouponOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    minAmount?: Prisma.SortOrderInput | Prisma.SortOrder;
    maxAmount?: Prisma.SortOrderInput | Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    usageLimit?: Prisma.SortOrderInput | Prisma.SortOrder;
    usageCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.CouponCountOrderByAggregateInput;
    _avg?: Prisma.CouponAvgOrderByAggregateInput;
    _max?: Prisma.CouponMaxOrderByAggregateInput;
    _min?: Prisma.CouponMinOrderByAggregateInput;
    _sum?: Prisma.CouponSumOrderByAggregateInput;
};
export type CouponScalarWhereWithAggregatesInput = {
    AND?: Prisma.CouponScalarWhereWithAggregatesInput | Prisma.CouponScalarWhereWithAggregatesInput[];
    OR?: Prisma.CouponScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CouponScalarWhereWithAggregatesInput | Prisma.CouponScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Coupon"> | string;
    code?: Prisma.StringWithAggregatesFilter<"Coupon"> | string;
    type?: Prisma.EnumCouponTypeWithAggregatesFilter<"Coupon"> | $Enums.CouponType;
    value?: Prisma.DecimalWithAggregatesFilter<"Coupon"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    minAmount?: Prisma.DecimalNullableWithAggregatesFilter<"Coupon"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    maxAmount?: Prisma.DecimalNullableWithAggregatesFilter<"Coupon"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    startDate?: Prisma.DateTimeWithAggregatesFilter<"Coupon"> | Date | string;
    endDate?: Prisma.DateTimeWithAggregatesFilter<"Coupon"> | Date | string;
    isActive?: Prisma.BoolWithAggregatesFilter<"Coupon"> | boolean;
    usageLimit?: Prisma.IntNullableWithAggregatesFilter<"Coupon"> | number | null;
    usageCount?: Prisma.IntWithAggregatesFilter<"Coupon"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Coupon"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Coupon"> | Date | string;
};
export type CouponCreateInput = {
    id?: string;
    code: string;
    type: $Enums.CouponType;
    value: runtime.Decimal | runtime.DecimalJsLike | number | string;
    minAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    maxAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    startDate: Date | string;
    endDate: Date | string;
    isActive?: boolean;
    usageLimit?: number | null;
    usageCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orders?: Prisma.OrderCreateNestedManyWithoutCouponInput;
};
export type CouponUncheckedCreateInput = {
    id?: string;
    code: string;
    type: $Enums.CouponType;
    value: runtime.Decimal | runtime.DecimalJsLike | number | string;
    minAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    maxAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    startDate: Date | string;
    endDate: Date | string;
    isActive?: boolean;
    usageLimit?: number | null;
    usageCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orders?: Prisma.OrderUncheckedCreateNestedManyWithoutCouponInput;
};
export type CouponUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumCouponTypeFieldUpdateOperationsInput | $Enums.CouponType;
    value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    minAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    maxAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    usageLimit?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    usageCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: Prisma.OrderUpdateManyWithoutCouponNestedInput;
};
export type CouponUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumCouponTypeFieldUpdateOperationsInput | $Enums.CouponType;
    value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    minAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    maxAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    usageLimit?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    usageCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orders?: Prisma.OrderUncheckedUpdateManyWithoutCouponNestedInput;
};
export type CouponCreateManyInput = {
    id?: string;
    code: string;
    type: $Enums.CouponType;
    value: runtime.Decimal | runtime.DecimalJsLike | number | string;
    minAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    maxAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    startDate: Date | string;
    endDate: Date | string;
    isActive?: boolean;
    usageLimit?: number | null;
    usageCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CouponUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumCouponTypeFieldUpdateOperationsInput | $Enums.CouponType;
    value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    minAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    maxAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    usageLimit?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    usageCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CouponUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumCouponTypeFieldUpdateOperationsInput | $Enums.CouponType;
    value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    minAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    maxAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    usageLimit?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    usageCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CouponNullableScalarRelationFilter = {
    is?: Prisma.CouponWhereInput | null;
    isNot?: Prisma.CouponWhereInput | null;
};
export type CouponCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    minAmount?: Prisma.SortOrder;
    maxAmount?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    usageLimit?: Prisma.SortOrder;
    usageCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CouponAvgOrderByAggregateInput = {
    value?: Prisma.SortOrder;
    minAmount?: Prisma.SortOrder;
    maxAmount?: Prisma.SortOrder;
    usageLimit?: Prisma.SortOrder;
    usageCount?: Prisma.SortOrder;
};
export type CouponMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    minAmount?: Prisma.SortOrder;
    maxAmount?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    usageLimit?: Prisma.SortOrder;
    usageCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CouponMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    minAmount?: Prisma.SortOrder;
    maxAmount?: Prisma.SortOrder;
    startDate?: Prisma.SortOrder;
    endDate?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    usageLimit?: Prisma.SortOrder;
    usageCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type CouponSumOrderByAggregateInput = {
    value?: Prisma.SortOrder;
    minAmount?: Prisma.SortOrder;
    maxAmount?: Prisma.SortOrder;
    usageLimit?: Prisma.SortOrder;
    usageCount?: Prisma.SortOrder;
};
export type CouponCreateNestedOneWithoutOrdersInput = {
    create?: Prisma.XOR<Prisma.CouponCreateWithoutOrdersInput, Prisma.CouponUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.CouponCreateOrConnectWithoutOrdersInput;
    connect?: Prisma.CouponWhereUniqueInput;
};
export type CouponUpdateOneWithoutOrdersNestedInput = {
    create?: Prisma.XOR<Prisma.CouponCreateWithoutOrdersInput, Prisma.CouponUncheckedCreateWithoutOrdersInput>;
    connectOrCreate?: Prisma.CouponCreateOrConnectWithoutOrdersInput;
    upsert?: Prisma.CouponUpsertWithoutOrdersInput;
    disconnect?: Prisma.CouponWhereInput | boolean;
    delete?: Prisma.CouponWhereInput | boolean;
    connect?: Prisma.CouponWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CouponUpdateToOneWithWhereWithoutOrdersInput, Prisma.CouponUpdateWithoutOrdersInput>, Prisma.CouponUncheckedUpdateWithoutOrdersInput>;
};
export type EnumCouponTypeFieldUpdateOperationsInput = {
    set?: $Enums.CouponType;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type CouponCreateWithoutOrdersInput = {
    id?: string;
    code: string;
    type: $Enums.CouponType;
    value: runtime.Decimal | runtime.DecimalJsLike | number | string;
    minAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    maxAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    startDate: Date | string;
    endDate: Date | string;
    isActive?: boolean;
    usageLimit?: number | null;
    usageCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CouponUncheckedCreateWithoutOrdersInput = {
    id?: string;
    code: string;
    type: $Enums.CouponType;
    value: runtime.Decimal | runtime.DecimalJsLike | number | string;
    minAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    maxAmount?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    startDate: Date | string;
    endDate: Date | string;
    isActive?: boolean;
    usageLimit?: number | null;
    usageCount?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type CouponCreateOrConnectWithoutOrdersInput = {
    where: Prisma.CouponWhereUniqueInput;
    create: Prisma.XOR<Prisma.CouponCreateWithoutOrdersInput, Prisma.CouponUncheckedCreateWithoutOrdersInput>;
};
export type CouponUpsertWithoutOrdersInput = {
    update: Prisma.XOR<Prisma.CouponUpdateWithoutOrdersInput, Prisma.CouponUncheckedUpdateWithoutOrdersInput>;
    create: Prisma.XOR<Prisma.CouponCreateWithoutOrdersInput, Prisma.CouponUncheckedCreateWithoutOrdersInput>;
    where?: Prisma.CouponWhereInput;
};
export type CouponUpdateToOneWithWhereWithoutOrdersInput = {
    where?: Prisma.CouponWhereInput;
    data: Prisma.XOR<Prisma.CouponUpdateWithoutOrdersInput, Prisma.CouponUncheckedUpdateWithoutOrdersInput>;
};
export type CouponUpdateWithoutOrdersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumCouponTypeFieldUpdateOperationsInput | $Enums.CouponType;
    value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    minAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    maxAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    usageLimit?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    usageCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CouponUncheckedUpdateWithoutOrdersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumCouponTypeFieldUpdateOperationsInput | $Enums.CouponType;
    value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    minAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    maxAmount?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    startDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    usageLimit?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    usageCount?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CouponCountOutputType = {
    orders: number;
};
export type CouponCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders?: boolean | CouponCountOutputTypeCountOrdersArgs;
};
export type CouponCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CouponCountOutputTypeSelect<ExtArgs> | null;
};
export type CouponCountOutputTypeCountOrdersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrderWhereInput;
};
export type CouponSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    type?: boolean;
    value?: boolean;
    minAmount?: boolean;
    maxAmount?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    isActive?: boolean;
    usageLimit?: boolean;
    usageCount?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    orders?: boolean | Prisma.Coupon$ordersArgs<ExtArgs>;
    _count?: boolean | Prisma.CouponCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["coupon"]>;
export type CouponSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    type?: boolean;
    value?: boolean;
    minAmount?: boolean;
    maxAmount?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    isActive?: boolean;
    usageLimit?: boolean;
    usageCount?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["coupon"]>;
export type CouponSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    code?: boolean;
    type?: boolean;
    value?: boolean;
    minAmount?: boolean;
    maxAmount?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    isActive?: boolean;
    usageLimit?: boolean;
    usageCount?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["coupon"]>;
export type CouponSelectScalar = {
    id?: boolean;
    code?: boolean;
    type?: boolean;
    value?: boolean;
    minAmount?: boolean;
    maxAmount?: boolean;
    startDate?: boolean;
    endDate?: boolean;
    isActive?: boolean;
    usageLimit?: boolean;
    usageCount?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type CouponOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "code" | "type" | "value" | "minAmount" | "maxAmount" | "startDate" | "endDate" | "isActive" | "usageLimit" | "usageCount" | "createdAt" | "updatedAt", ExtArgs["result"]["coupon"]>;
export type CouponInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orders?: boolean | Prisma.Coupon$ordersArgs<ExtArgs>;
    _count?: boolean | Prisma.CouponCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CouponIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type CouponIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $CouponPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Coupon";
    objects: {
        orders: Prisma.$OrderPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        code: string;
        type: $Enums.CouponType;
        value: runtime.Decimal;
        minAmount: runtime.Decimal | null;
        maxAmount: runtime.Decimal | null;
        startDate: Date;
        endDate: Date;
        isActive: boolean;
        usageLimit: number | null;
        usageCount: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["coupon"]>;
    composites: {};
};
export type CouponGetPayload<S extends boolean | null | undefined | CouponDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CouponPayload, S>;
export type CouponCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CouponFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CouponCountAggregateInputType | true;
};
export interface CouponDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Coupon'];
        meta: {
            name: 'Coupon';
        };
    };
    findUnique<T extends CouponFindUniqueArgs>(args: Prisma.SelectSubset<T, CouponFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CouponClient<runtime.Types.Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CouponFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CouponFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CouponClient<runtime.Types.Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CouponFindFirstArgs>(args?: Prisma.SelectSubset<T, CouponFindFirstArgs<ExtArgs>>): Prisma.Prisma__CouponClient<runtime.Types.Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CouponFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CouponFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CouponClient<runtime.Types.Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CouponFindManyArgs>(args?: Prisma.SelectSubset<T, CouponFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CouponCreateArgs>(args: Prisma.SelectSubset<T, CouponCreateArgs<ExtArgs>>): Prisma.Prisma__CouponClient<runtime.Types.Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CouponCreateManyArgs>(args?: Prisma.SelectSubset<T, CouponCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CouponCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CouponCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CouponDeleteArgs>(args: Prisma.SelectSubset<T, CouponDeleteArgs<ExtArgs>>): Prisma.Prisma__CouponClient<runtime.Types.Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CouponUpdateArgs>(args: Prisma.SelectSubset<T, CouponUpdateArgs<ExtArgs>>): Prisma.Prisma__CouponClient<runtime.Types.Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CouponDeleteManyArgs>(args?: Prisma.SelectSubset<T, CouponDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CouponUpdateManyArgs>(args: Prisma.SelectSubset<T, CouponUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CouponUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CouponUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CouponUpsertArgs>(args: Prisma.SelectSubset<T, CouponUpsertArgs<ExtArgs>>): Prisma.Prisma__CouponClient<runtime.Types.Result.GetResult<Prisma.$CouponPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CouponCountArgs>(args?: Prisma.Subset<T, CouponCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CouponCountAggregateOutputType> : number>;
    aggregate<T extends CouponAggregateArgs>(args: Prisma.Subset<T, CouponAggregateArgs>): Prisma.PrismaPromise<GetCouponAggregateType<T>>;
    groupBy<T extends CouponGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CouponGroupByArgs['orderBy'];
    } : {
        orderBy?: CouponGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CouponGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCouponGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CouponFieldRefs;
}
export interface Prisma__CouponClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    orders<T extends Prisma.Coupon$ordersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Coupon$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CouponFieldRefs {
    readonly id: Prisma.FieldRef<"Coupon", 'String'>;
    readonly code: Prisma.FieldRef<"Coupon", 'String'>;
    readonly type: Prisma.FieldRef<"Coupon", 'CouponType'>;
    readonly value: Prisma.FieldRef<"Coupon", 'Decimal'>;
    readonly minAmount: Prisma.FieldRef<"Coupon", 'Decimal'>;
    readonly maxAmount: Prisma.FieldRef<"Coupon", 'Decimal'>;
    readonly startDate: Prisma.FieldRef<"Coupon", 'DateTime'>;
    readonly endDate: Prisma.FieldRef<"Coupon", 'DateTime'>;
    readonly isActive: Prisma.FieldRef<"Coupon", 'Boolean'>;
    readonly usageLimit: Prisma.FieldRef<"Coupon", 'Int'>;
    readonly usageCount: Prisma.FieldRef<"Coupon", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"Coupon", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Coupon", 'DateTime'>;
}
export type CouponFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CouponSelect<ExtArgs> | null;
    omit?: Prisma.CouponOmit<ExtArgs> | null;
    include?: Prisma.CouponInclude<ExtArgs> | null;
    where: Prisma.CouponWhereUniqueInput;
};
export type CouponFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CouponSelect<ExtArgs> | null;
    omit?: Prisma.CouponOmit<ExtArgs> | null;
    include?: Prisma.CouponInclude<ExtArgs> | null;
    where: Prisma.CouponWhereUniqueInput;
};
export type CouponFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CouponSelect<ExtArgs> | null;
    omit?: Prisma.CouponOmit<ExtArgs> | null;
    include?: Prisma.CouponInclude<ExtArgs> | null;
    where?: Prisma.CouponWhereInput;
    orderBy?: Prisma.CouponOrderByWithRelationInput | Prisma.CouponOrderByWithRelationInput[];
    cursor?: Prisma.CouponWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CouponScalarFieldEnum | Prisma.CouponScalarFieldEnum[];
};
export type CouponFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CouponSelect<ExtArgs> | null;
    omit?: Prisma.CouponOmit<ExtArgs> | null;
    include?: Prisma.CouponInclude<ExtArgs> | null;
    where?: Prisma.CouponWhereInput;
    orderBy?: Prisma.CouponOrderByWithRelationInput | Prisma.CouponOrderByWithRelationInput[];
    cursor?: Prisma.CouponWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CouponScalarFieldEnum | Prisma.CouponScalarFieldEnum[];
};
export type CouponFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CouponSelect<ExtArgs> | null;
    omit?: Prisma.CouponOmit<ExtArgs> | null;
    include?: Prisma.CouponInclude<ExtArgs> | null;
    where?: Prisma.CouponWhereInput;
    orderBy?: Prisma.CouponOrderByWithRelationInput | Prisma.CouponOrderByWithRelationInput[];
    cursor?: Prisma.CouponWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CouponScalarFieldEnum | Prisma.CouponScalarFieldEnum[];
};
export type CouponCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CouponSelect<ExtArgs> | null;
    omit?: Prisma.CouponOmit<ExtArgs> | null;
    include?: Prisma.CouponInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CouponCreateInput, Prisma.CouponUncheckedCreateInput>;
};
export type CouponCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CouponCreateManyInput | Prisma.CouponCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CouponCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CouponSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CouponOmit<ExtArgs> | null;
    data: Prisma.CouponCreateManyInput | Prisma.CouponCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CouponUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CouponSelect<ExtArgs> | null;
    omit?: Prisma.CouponOmit<ExtArgs> | null;
    include?: Prisma.CouponInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CouponUpdateInput, Prisma.CouponUncheckedUpdateInput>;
    where: Prisma.CouponWhereUniqueInput;
};
export type CouponUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CouponUpdateManyMutationInput, Prisma.CouponUncheckedUpdateManyInput>;
    where?: Prisma.CouponWhereInput;
    limit?: number;
};
export type CouponUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CouponSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CouponOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CouponUpdateManyMutationInput, Prisma.CouponUncheckedUpdateManyInput>;
    where?: Prisma.CouponWhereInput;
    limit?: number;
};
export type CouponUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CouponSelect<ExtArgs> | null;
    omit?: Prisma.CouponOmit<ExtArgs> | null;
    include?: Prisma.CouponInclude<ExtArgs> | null;
    where: Prisma.CouponWhereUniqueInput;
    create: Prisma.XOR<Prisma.CouponCreateInput, Prisma.CouponUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CouponUpdateInput, Prisma.CouponUncheckedUpdateInput>;
};
export type CouponDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CouponSelect<ExtArgs> | null;
    omit?: Prisma.CouponOmit<ExtArgs> | null;
    include?: Prisma.CouponInclude<ExtArgs> | null;
    where: Prisma.CouponWhereUniqueInput;
};
export type CouponDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CouponWhereInput;
    limit?: number;
};
export type Coupon$ordersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type CouponDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CouponSelect<ExtArgs> | null;
    omit?: Prisma.CouponOmit<ExtArgs> | null;
    include?: Prisma.CouponInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Coupon.d.ts.map