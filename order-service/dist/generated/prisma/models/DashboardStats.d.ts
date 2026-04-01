import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type DashboardStatsModel = runtime.Types.Result.DefaultSelection<Prisma.$DashboardStatsPayload>;
export type AggregateDashboardStats = {
    _count: DashboardStatsCountAggregateOutputType | null;
    _avg: DashboardStatsAvgAggregateOutputType | null;
    _sum: DashboardStatsSumAggregateOutputType | null;
    _min: DashboardStatsMinAggregateOutputType | null;
    _max: DashboardStatsMaxAggregateOutputType | null;
};
export type DashboardStatsAvgAggregateOutputType = {
    totalSales: runtime.Decimal | null;
    orderCount: number | null;
    newUserCount: number | null;
    productsSold: number | null;
    avgOrderValue: runtime.Decimal | null;
};
export type DashboardStatsSumAggregateOutputType = {
    totalSales: runtime.Decimal | null;
    orderCount: number | null;
    newUserCount: number | null;
    productsSold: number | null;
    avgOrderValue: runtime.Decimal | null;
};
export type DashboardStatsMinAggregateOutputType = {
    id: string | null;
    date: Date | null;
    totalSales: runtime.Decimal | null;
    orderCount: number | null;
    newUserCount: number | null;
    productsSold: number | null;
    avgOrderValue: runtime.Decimal | null;
    topSellingProduct: string | null;
    createdAt: Date | null;
};
export type DashboardStatsMaxAggregateOutputType = {
    id: string | null;
    date: Date | null;
    totalSales: runtime.Decimal | null;
    orderCount: number | null;
    newUserCount: number | null;
    productsSold: number | null;
    avgOrderValue: runtime.Decimal | null;
    topSellingProduct: string | null;
    createdAt: Date | null;
};
export type DashboardStatsCountAggregateOutputType = {
    id: number;
    date: number;
    totalSales: number;
    orderCount: number;
    newUserCount: number;
    productsSold: number;
    avgOrderValue: number;
    topSellingProduct: number;
    createdAt: number;
    _all: number;
};
export type DashboardStatsAvgAggregateInputType = {
    totalSales?: true;
    orderCount?: true;
    newUserCount?: true;
    productsSold?: true;
    avgOrderValue?: true;
};
export type DashboardStatsSumAggregateInputType = {
    totalSales?: true;
    orderCount?: true;
    newUserCount?: true;
    productsSold?: true;
    avgOrderValue?: true;
};
export type DashboardStatsMinAggregateInputType = {
    id?: true;
    date?: true;
    totalSales?: true;
    orderCount?: true;
    newUserCount?: true;
    productsSold?: true;
    avgOrderValue?: true;
    topSellingProduct?: true;
    createdAt?: true;
};
export type DashboardStatsMaxAggregateInputType = {
    id?: true;
    date?: true;
    totalSales?: true;
    orderCount?: true;
    newUserCount?: true;
    productsSold?: true;
    avgOrderValue?: true;
    topSellingProduct?: true;
    createdAt?: true;
};
export type DashboardStatsCountAggregateInputType = {
    id?: true;
    date?: true;
    totalSales?: true;
    orderCount?: true;
    newUserCount?: true;
    productsSold?: true;
    avgOrderValue?: true;
    topSellingProduct?: true;
    createdAt?: true;
    _all?: true;
};
export type DashboardStatsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DashboardStatsWhereInput;
    orderBy?: Prisma.DashboardStatsOrderByWithRelationInput | Prisma.DashboardStatsOrderByWithRelationInput[];
    cursor?: Prisma.DashboardStatsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DashboardStatsCountAggregateInputType;
    _avg?: DashboardStatsAvgAggregateInputType;
    _sum?: DashboardStatsSumAggregateInputType;
    _min?: DashboardStatsMinAggregateInputType;
    _max?: DashboardStatsMaxAggregateInputType;
};
export type GetDashboardStatsAggregateType<T extends DashboardStatsAggregateArgs> = {
    [P in keyof T & keyof AggregateDashboardStats]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDashboardStats[P]> : Prisma.GetScalarType<T[P], AggregateDashboardStats[P]>;
};
export type DashboardStatsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DashboardStatsWhereInput;
    orderBy?: Prisma.DashboardStatsOrderByWithAggregationInput | Prisma.DashboardStatsOrderByWithAggregationInput[];
    by: Prisma.DashboardStatsScalarFieldEnum[] | Prisma.DashboardStatsScalarFieldEnum;
    having?: Prisma.DashboardStatsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DashboardStatsCountAggregateInputType | true;
    _avg?: DashboardStatsAvgAggregateInputType;
    _sum?: DashboardStatsSumAggregateInputType;
    _min?: DashboardStatsMinAggregateInputType;
    _max?: DashboardStatsMaxAggregateInputType;
};
export type DashboardStatsGroupByOutputType = {
    id: string;
    date: Date;
    totalSales: runtime.Decimal;
    orderCount: number;
    newUserCount: number;
    productsSold: number;
    avgOrderValue: runtime.Decimal;
    topSellingProduct: string | null;
    createdAt: Date;
    _count: DashboardStatsCountAggregateOutputType | null;
    _avg: DashboardStatsAvgAggregateOutputType | null;
    _sum: DashboardStatsSumAggregateOutputType | null;
    _min: DashboardStatsMinAggregateOutputType | null;
    _max: DashboardStatsMaxAggregateOutputType | null;
};
type GetDashboardStatsGroupByPayload<T extends DashboardStatsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DashboardStatsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DashboardStatsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DashboardStatsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DashboardStatsGroupByOutputType[P]>;
}>>;
export type DashboardStatsWhereInput = {
    AND?: Prisma.DashboardStatsWhereInput | Prisma.DashboardStatsWhereInput[];
    OR?: Prisma.DashboardStatsWhereInput[];
    NOT?: Prisma.DashboardStatsWhereInput | Prisma.DashboardStatsWhereInput[];
    id?: Prisma.StringFilter<"DashboardStats"> | string;
    date?: Prisma.DateTimeFilter<"DashboardStats"> | Date | string;
    totalSales?: Prisma.DecimalFilter<"DashboardStats"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    orderCount?: Prisma.IntFilter<"DashboardStats"> | number;
    newUserCount?: Prisma.IntFilter<"DashboardStats"> | number;
    productsSold?: Prisma.IntFilter<"DashboardStats"> | number;
    avgOrderValue?: Prisma.DecimalFilter<"DashboardStats"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    topSellingProduct?: Prisma.StringNullableFilter<"DashboardStats"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"DashboardStats"> | Date | string;
};
export type DashboardStatsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    totalSales?: Prisma.SortOrder;
    orderCount?: Prisma.SortOrder;
    newUserCount?: Prisma.SortOrder;
    productsSold?: Prisma.SortOrder;
    avgOrderValue?: Prisma.SortOrder;
    topSellingProduct?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DashboardStatsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    date?: Date | string;
    AND?: Prisma.DashboardStatsWhereInput | Prisma.DashboardStatsWhereInput[];
    OR?: Prisma.DashboardStatsWhereInput[];
    NOT?: Prisma.DashboardStatsWhereInput | Prisma.DashboardStatsWhereInput[];
    totalSales?: Prisma.DecimalFilter<"DashboardStats"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    orderCount?: Prisma.IntFilter<"DashboardStats"> | number;
    newUserCount?: Prisma.IntFilter<"DashboardStats"> | number;
    productsSold?: Prisma.IntFilter<"DashboardStats"> | number;
    avgOrderValue?: Prisma.DecimalFilter<"DashboardStats"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    topSellingProduct?: Prisma.StringNullableFilter<"DashboardStats"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"DashboardStats"> | Date | string;
}, "id" | "date">;
export type DashboardStatsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    totalSales?: Prisma.SortOrder;
    orderCount?: Prisma.SortOrder;
    newUserCount?: Prisma.SortOrder;
    productsSold?: Prisma.SortOrder;
    avgOrderValue?: Prisma.SortOrder;
    topSellingProduct?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.DashboardStatsCountOrderByAggregateInput;
    _avg?: Prisma.DashboardStatsAvgOrderByAggregateInput;
    _max?: Prisma.DashboardStatsMaxOrderByAggregateInput;
    _min?: Prisma.DashboardStatsMinOrderByAggregateInput;
    _sum?: Prisma.DashboardStatsSumOrderByAggregateInput;
};
export type DashboardStatsScalarWhereWithAggregatesInput = {
    AND?: Prisma.DashboardStatsScalarWhereWithAggregatesInput | Prisma.DashboardStatsScalarWhereWithAggregatesInput[];
    OR?: Prisma.DashboardStatsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DashboardStatsScalarWhereWithAggregatesInput | Prisma.DashboardStatsScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"DashboardStats"> | string;
    date?: Prisma.DateTimeWithAggregatesFilter<"DashboardStats"> | Date | string;
    totalSales?: Prisma.DecimalWithAggregatesFilter<"DashboardStats"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    orderCount?: Prisma.IntWithAggregatesFilter<"DashboardStats"> | number;
    newUserCount?: Prisma.IntWithAggregatesFilter<"DashboardStats"> | number;
    productsSold?: Prisma.IntWithAggregatesFilter<"DashboardStats"> | number;
    avgOrderValue?: Prisma.DecimalWithAggregatesFilter<"DashboardStats"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    topSellingProduct?: Prisma.StringNullableWithAggregatesFilter<"DashboardStats"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"DashboardStats"> | Date | string;
};
export type DashboardStatsCreateInput = {
    id?: string;
    date: Date | string;
    totalSales: runtime.Decimal | runtime.DecimalJsLike | number | string;
    orderCount: number;
    newUserCount: number;
    productsSold: number;
    avgOrderValue: runtime.Decimal | runtime.DecimalJsLike | number | string;
    topSellingProduct?: string | null;
    createdAt?: Date | string;
};
export type DashboardStatsUncheckedCreateInput = {
    id?: string;
    date: Date | string;
    totalSales: runtime.Decimal | runtime.DecimalJsLike | number | string;
    orderCount: number;
    newUserCount: number;
    productsSold: number;
    avgOrderValue: runtime.Decimal | runtime.DecimalJsLike | number | string;
    topSellingProduct?: string | null;
    createdAt?: Date | string;
};
export type DashboardStatsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalSales?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    orderCount?: Prisma.IntFieldUpdateOperationsInput | number;
    newUserCount?: Prisma.IntFieldUpdateOperationsInput | number;
    productsSold?: Prisma.IntFieldUpdateOperationsInput | number;
    avgOrderValue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    topSellingProduct?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DashboardStatsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalSales?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    orderCount?: Prisma.IntFieldUpdateOperationsInput | number;
    newUserCount?: Prisma.IntFieldUpdateOperationsInput | number;
    productsSold?: Prisma.IntFieldUpdateOperationsInput | number;
    avgOrderValue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    topSellingProduct?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DashboardStatsCreateManyInput = {
    id?: string;
    date: Date | string;
    totalSales: runtime.Decimal | runtime.DecimalJsLike | number | string;
    orderCount: number;
    newUserCount: number;
    productsSold: number;
    avgOrderValue: runtime.Decimal | runtime.DecimalJsLike | number | string;
    topSellingProduct?: string | null;
    createdAt?: Date | string;
};
export type DashboardStatsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalSales?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    orderCount?: Prisma.IntFieldUpdateOperationsInput | number;
    newUserCount?: Prisma.IntFieldUpdateOperationsInput | number;
    productsSold?: Prisma.IntFieldUpdateOperationsInput | number;
    avgOrderValue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    topSellingProduct?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DashboardStatsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    totalSales?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    orderCount?: Prisma.IntFieldUpdateOperationsInput | number;
    newUserCount?: Prisma.IntFieldUpdateOperationsInput | number;
    productsSold?: Prisma.IntFieldUpdateOperationsInput | number;
    avgOrderValue?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    topSellingProduct?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DashboardStatsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    totalSales?: Prisma.SortOrder;
    orderCount?: Prisma.SortOrder;
    newUserCount?: Prisma.SortOrder;
    productsSold?: Prisma.SortOrder;
    avgOrderValue?: Prisma.SortOrder;
    topSellingProduct?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DashboardStatsAvgOrderByAggregateInput = {
    totalSales?: Prisma.SortOrder;
    orderCount?: Prisma.SortOrder;
    newUserCount?: Prisma.SortOrder;
    productsSold?: Prisma.SortOrder;
    avgOrderValue?: Prisma.SortOrder;
};
export type DashboardStatsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    totalSales?: Prisma.SortOrder;
    orderCount?: Prisma.SortOrder;
    newUserCount?: Prisma.SortOrder;
    productsSold?: Prisma.SortOrder;
    avgOrderValue?: Prisma.SortOrder;
    topSellingProduct?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DashboardStatsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    date?: Prisma.SortOrder;
    totalSales?: Prisma.SortOrder;
    orderCount?: Prisma.SortOrder;
    newUserCount?: Prisma.SortOrder;
    productsSold?: Prisma.SortOrder;
    avgOrderValue?: Prisma.SortOrder;
    topSellingProduct?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DashboardStatsSumOrderByAggregateInput = {
    totalSales?: Prisma.SortOrder;
    orderCount?: Prisma.SortOrder;
    newUserCount?: Prisma.SortOrder;
    productsSold?: Prisma.SortOrder;
    avgOrderValue?: Prisma.SortOrder;
};
export type DashboardStatsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    date?: boolean;
    totalSales?: boolean;
    orderCount?: boolean;
    newUserCount?: boolean;
    productsSold?: boolean;
    avgOrderValue?: boolean;
    topSellingProduct?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["dashboardStats"]>;
export type DashboardStatsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    date?: boolean;
    totalSales?: boolean;
    orderCount?: boolean;
    newUserCount?: boolean;
    productsSold?: boolean;
    avgOrderValue?: boolean;
    topSellingProduct?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["dashboardStats"]>;
export type DashboardStatsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    date?: boolean;
    totalSales?: boolean;
    orderCount?: boolean;
    newUserCount?: boolean;
    productsSold?: boolean;
    avgOrderValue?: boolean;
    topSellingProduct?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["dashboardStats"]>;
export type DashboardStatsSelectScalar = {
    id?: boolean;
    date?: boolean;
    totalSales?: boolean;
    orderCount?: boolean;
    newUserCount?: boolean;
    productsSold?: boolean;
    avgOrderValue?: boolean;
    topSellingProduct?: boolean;
    createdAt?: boolean;
};
export type DashboardStatsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "date" | "totalSales" | "orderCount" | "newUserCount" | "productsSold" | "avgOrderValue" | "topSellingProduct" | "createdAt", ExtArgs["result"]["dashboardStats"]>;
export type $DashboardStatsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DashboardStats";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        date: Date;
        totalSales: runtime.Decimal;
        orderCount: number;
        newUserCount: number;
        productsSold: number;
        avgOrderValue: runtime.Decimal;
        topSellingProduct: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["dashboardStats"]>;
    composites: {};
};
export type DashboardStatsGetPayload<S extends boolean | null | undefined | DashboardStatsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DashboardStatsPayload, S>;
export type DashboardStatsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DashboardStatsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DashboardStatsCountAggregateInputType | true;
};
export interface DashboardStatsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DashboardStats'];
        meta: {
            name: 'DashboardStats';
        };
    };
    findUnique<T extends DashboardStatsFindUniqueArgs>(args: Prisma.SelectSubset<T, DashboardStatsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DashboardStatsClient<runtime.Types.Result.GetResult<Prisma.$DashboardStatsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DashboardStatsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DashboardStatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DashboardStatsClient<runtime.Types.Result.GetResult<Prisma.$DashboardStatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DashboardStatsFindFirstArgs>(args?: Prisma.SelectSubset<T, DashboardStatsFindFirstArgs<ExtArgs>>): Prisma.Prisma__DashboardStatsClient<runtime.Types.Result.GetResult<Prisma.$DashboardStatsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DashboardStatsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DashboardStatsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DashboardStatsClient<runtime.Types.Result.GetResult<Prisma.$DashboardStatsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DashboardStatsFindManyArgs>(args?: Prisma.SelectSubset<T, DashboardStatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DashboardStatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DashboardStatsCreateArgs>(args: Prisma.SelectSubset<T, DashboardStatsCreateArgs<ExtArgs>>): Prisma.Prisma__DashboardStatsClient<runtime.Types.Result.GetResult<Prisma.$DashboardStatsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DashboardStatsCreateManyArgs>(args?: Prisma.SelectSubset<T, DashboardStatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DashboardStatsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DashboardStatsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DashboardStatsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DashboardStatsDeleteArgs>(args: Prisma.SelectSubset<T, DashboardStatsDeleteArgs<ExtArgs>>): Prisma.Prisma__DashboardStatsClient<runtime.Types.Result.GetResult<Prisma.$DashboardStatsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DashboardStatsUpdateArgs>(args: Prisma.SelectSubset<T, DashboardStatsUpdateArgs<ExtArgs>>): Prisma.Prisma__DashboardStatsClient<runtime.Types.Result.GetResult<Prisma.$DashboardStatsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DashboardStatsDeleteManyArgs>(args?: Prisma.SelectSubset<T, DashboardStatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DashboardStatsUpdateManyArgs>(args: Prisma.SelectSubset<T, DashboardStatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DashboardStatsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DashboardStatsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DashboardStatsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DashboardStatsUpsertArgs>(args: Prisma.SelectSubset<T, DashboardStatsUpsertArgs<ExtArgs>>): Prisma.Prisma__DashboardStatsClient<runtime.Types.Result.GetResult<Prisma.$DashboardStatsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DashboardStatsCountArgs>(args?: Prisma.Subset<T, DashboardStatsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DashboardStatsCountAggregateOutputType> : number>;
    aggregate<T extends DashboardStatsAggregateArgs>(args: Prisma.Subset<T, DashboardStatsAggregateArgs>): Prisma.PrismaPromise<GetDashboardStatsAggregateType<T>>;
    groupBy<T extends DashboardStatsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DashboardStatsGroupByArgs['orderBy'];
    } : {
        orderBy?: DashboardStatsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DashboardStatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDashboardStatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DashboardStatsFieldRefs;
}
export interface Prisma__DashboardStatsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DashboardStatsFieldRefs {
    readonly id: Prisma.FieldRef<"DashboardStats", 'String'>;
    readonly date: Prisma.FieldRef<"DashboardStats", 'DateTime'>;
    readonly totalSales: Prisma.FieldRef<"DashboardStats", 'Decimal'>;
    readonly orderCount: Prisma.FieldRef<"DashboardStats", 'Int'>;
    readonly newUserCount: Prisma.FieldRef<"DashboardStats", 'Int'>;
    readonly productsSold: Prisma.FieldRef<"DashboardStats", 'Int'>;
    readonly avgOrderValue: Prisma.FieldRef<"DashboardStats", 'Decimal'>;
    readonly topSellingProduct: Prisma.FieldRef<"DashboardStats", 'String'>;
    readonly createdAt: Prisma.FieldRef<"DashboardStats", 'DateTime'>;
}
export type DashboardStatsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DashboardStatsSelect<ExtArgs> | null;
    omit?: Prisma.DashboardStatsOmit<ExtArgs> | null;
    where: Prisma.DashboardStatsWhereUniqueInput;
};
export type DashboardStatsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DashboardStatsSelect<ExtArgs> | null;
    omit?: Prisma.DashboardStatsOmit<ExtArgs> | null;
    where: Prisma.DashboardStatsWhereUniqueInput;
};
export type DashboardStatsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DashboardStatsSelect<ExtArgs> | null;
    omit?: Prisma.DashboardStatsOmit<ExtArgs> | null;
    where?: Prisma.DashboardStatsWhereInput;
    orderBy?: Prisma.DashboardStatsOrderByWithRelationInput | Prisma.DashboardStatsOrderByWithRelationInput[];
    cursor?: Prisma.DashboardStatsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DashboardStatsScalarFieldEnum | Prisma.DashboardStatsScalarFieldEnum[];
};
export type DashboardStatsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DashboardStatsSelect<ExtArgs> | null;
    omit?: Prisma.DashboardStatsOmit<ExtArgs> | null;
    where?: Prisma.DashboardStatsWhereInput;
    orderBy?: Prisma.DashboardStatsOrderByWithRelationInput | Prisma.DashboardStatsOrderByWithRelationInput[];
    cursor?: Prisma.DashboardStatsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DashboardStatsScalarFieldEnum | Prisma.DashboardStatsScalarFieldEnum[];
};
export type DashboardStatsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DashboardStatsSelect<ExtArgs> | null;
    omit?: Prisma.DashboardStatsOmit<ExtArgs> | null;
    where?: Prisma.DashboardStatsWhereInput;
    orderBy?: Prisma.DashboardStatsOrderByWithRelationInput | Prisma.DashboardStatsOrderByWithRelationInput[];
    cursor?: Prisma.DashboardStatsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DashboardStatsScalarFieldEnum | Prisma.DashboardStatsScalarFieldEnum[];
};
export type DashboardStatsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DashboardStatsSelect<ExtArgs> | null;
    omit?: Prisma.DashboardStatsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DashboardStatsCreateInput, Prisma.DashboardStatsUncheckedCreateInput>;
};
export type DashboardStatsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DashboardStatsCreateManyInput | Prisma.DashboardStatsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DashboardStatsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DashboardStatsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DashboardStatsOmit<ExtArgs> | null;
    data: Prisma.DashboardStatsCreateManyInput | Prisma.DashboardStatsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DashboardStatsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DashboardStatsSelect<ExtArgs> | null;
    omit?: Prisma.DashboardStatsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DashboardStatsUpdateInput, Prisma.DashboardStatsUncheckedUpdateInput>;
    where: Prisma.DashboardStatsWhereUniqueInput;
};
export type DashboardStatsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DashboardStatsUpdateManyMutationInput, Prisma.DashboardStatsUncheckedUpdateManyInput>;
    where?: Prisma.DashboardStatsWhereInput;
    limit?: number;
};
export type DashboardStatsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DashboardStatsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DashboardStatsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DashboardStatsUpdateManyMutationInput, Prisma.DashboardStatsUncheckedUpdateManyInput>;
    where?: Prisma.DashboardStatsWhereInput;
    limit?: number;
};
export type DashboardStatsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DashboardStatsSelect<ExtArgs> | null;
    omit?: Prisma.DashboardStatsOmit<ExtArgs> | null;
    where: Prisma.DashboardStatsWhereUniqueInput;
    create: Prisma.XOR<Prisma.DashboardStatsCreateInput, Prisma.DashboardStatsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DashboardStatsUpdateInput, Prisma.DashboardStatsUncheckedUpdateInput>;
};
export type DashboardStatsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DashboardStatsSelect<ExtArgs> | null;
    omit?: Prisma.DashboardStatsOmit<ExtArgs> | null;
    where: Prisma.DashboardStatsWhereUniqueInput;
};
export type DashboardStatsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DashboardStatsWhereInput;
    limit?: number;
};
export type DashboardStatsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DashboardStatsSelect<ExtArgs> | null;
    omit?: Prisma.DashboardStatsOmit<ExtArgs> | null;
};
export {};
//# sourceMappingURL=DashboardStats.d.ts.map