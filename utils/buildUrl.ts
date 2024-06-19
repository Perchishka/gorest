interface BaseRoute {
    path: string;
    children?: BaseRoute[]
}

type  ExtractRouteArrayPaths<T extends readonly BaseRoute[]> = ExtractRoutePaths<T[number]>

type  ExtractRoutePaths<T extends BaseRoute> = T["path"] | 
(T extends {children: infer C extends readonly BaseRoute[]} ? `${T["path"]}/${ExtractRoutePaths<C[number]>}`: never);

