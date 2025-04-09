
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model books
 * 
 */
export type books = $Result.DefaultSelection<Prisma.$booksPayload>
/**
 * Model testament
 * 
 */
export type testament = $Result.DefaultSelection<Prisma.$testamentPayload>
/**
 * Model verses
 * 
 */
export type verses = $Result.DefaultSelection<Prisma.$versesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Books
 * const books = await prisma.books.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Books
   * const books = await prisma.books.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.books`: Exposes CRUD operations for the **books** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Books
    * const books = await prisma.books.findMany()
    * ```
    */
  get books(): Prisma.booksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.testament`: Exposes CRUD operations for the **testament** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Testaments
    * const testaments = await prisma.testament.findMany()
    * ```
    */
  get testament(): Prisma.testamentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verses`: Exposes CRUD operations for the **verses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verses
    * const verses = await prisma.verses.findMany()
    * ```
    */
  get verses(): Prisma.versesDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    books: 'books',
    testament: 'testament',
    verses: 'verses'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "books" | "testament" | "verses"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      books: {
        payload: Prisma.$booksPayload<ExtArgs>
        fields: Prisma.booksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.booksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.booksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booksPayload>
          }
          findFirst: {
            args: Prisma.booksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.booksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booksPayload>
          }
          findMany: {
            args: Prisma.booksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booksPayload>[]
          }
          create: {
            args: Prisma.booksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booksPayload>
          }
          createMany: {
            args: Prisma.booksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.booksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booksPayload>[]
          }
          delete: {
            args: Prisma.booksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booksPayload>
          }
          update: {
            args: Prisma.booksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booksPayload>
          }
          deleteMany: {
            args: Prisma.booksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.booksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.booksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booksPayload>[]
          }
          upsert: {
            args: Prisma.booksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$booksPayload>
          }
          aggregate: {
            args: Prisma.BooksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooks>
          }
          groupBy: {
            args: Prisma.booksGroupByArgs<ExtArgs>
            result: $Utils.Optional<BooksGroupByOutputType>[]
          }
          count: {
            args: Prisma.booksCountArgs<ExtArgs>
            result: $Utils.Optional<BooksCountAggregateOutputType> | number
          }
        }
      }
      testament: {
        payload: Prisma.$testamentPayload<ExtArgs>
        fields: Prisma.testamentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.testamentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testamentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.testamentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testamentPayload>
          }
          findFirst: {
            args: Prisma.testamentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testamentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.testamentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testamentPayload>
          }
          findMany: {
            args: Prisma.testamentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testamentPayload>[]
          }
          create: {
            args: Prisma.testamentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testamentPayload>
          }
          createMany: {
            args: Prisma.testamentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.testamentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testamentPayload>[]
          }
          delete: {
            args: Prisma.testamentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testamentPayload>
          }
          update: {
            args: Prisma.testamentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testamentPayload>
          }
          deleteMany: {
            args: Prisma.testamentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.testamentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.testamentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testamentPayload>[]
          }
          upsert: {
            args: Prisma.testamentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$testamentPayload>
          }
          aggregate: {
            args: Prisma.TestamentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTestament>
          }
          groupBy: {
            args: Prisma.testamentGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestamentGroupByOutputType>[]
          }
          count: {
            args: Prisma.testamentCountArgs<ExtArgs>
            result: $Utils.Optional<TestamentCountAggregateOutputType> | number
          }
        }
      }
      verses: {
        payload: Prisma.$versesPayload<ExtArgs>
        fields: Prisma.versesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.versesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$versesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.versesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$versesPayload>
          }
          findFirst: {
            args: Prisma.versesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$versesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.versesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$versesPayload>
          }
          findMany: {
            args: Prisma.versesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$versesPayload>[]
          }
          create: {
            args: Prisma.versesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$versesPayload>
          }
          createMany: {
            args: Prisma.versesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.versesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$versesPayload>[]
          }
          delete: {
            args: Prisma.versesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$versesPayload>
          }
          update: {
            args: Prisma.versesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$versesPayload>
          }
          deleteMany: {
            args: Prisma.versesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.versesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.versesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$versesPayload>[]
          }
          upsert: {
            args: Prisma.versesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$versesPayload>
          }
          aggregate: {
            args: Prisma.VersesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerses>
          }
          groupBy: {
            args: Prisma.versesGroupByArgs<ExtArgs>
            result: $Utils.Optional<VersesGroupByOutputType>[]
          }
          count: {
            args: Prisma.versesCountArgs<ExtArgs>
            result: $Utils.Optional<VersesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    books?: booksOmit
    testament?: testamentOmit
    verses?: versesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model books
   */

  export type AggregateBooks = {
    _count: BooksCountAggregateOutputType | null
    _avg: BooksAvgAggregateOutputType | null
    _sum: BooksSumAggregateOutputType | null
    _min: BooksMinAggregateOutputType | null
    _max: BooksMaxAggregateOutputType | null
  }

  export type BooksAvgAggregateOutputType = {
    id: number | null
  }

  export type BooksSumAggregateOutputType = {
    id: number | null
  }

  export type BooksMinAggregateOutputType = {
    id: number | null
    name: string | null
    abbrev: string | null
    testament: string | null
  }

  export type BooksMaxAggregateOutputType = {
    id: number | null
    name: string | null
    abbrev: string | null
    testament: string | null
  }

  export type BooksCountAggregateOutputType = {
    id: number
    name: number
    abbrev: number
    testament: number
    _all: number
  }


  export type BooksAvgAggregateInputType = {
    id?: true
  }

  export type BooksSumAggregateInputType = {
    id?: true
  }

  export type BooksMinAggregateInputType = {
    id?: true
    name?: true
    abbrev?: true
    testament?: true
  }

  export type BooksMaxAggregateInputType = {
    id?: true
    name?: true
    abbrev?: true
    testament?: true
  }

  export type BooksCountAggregateInputType = {
    id?: true
    name?: true
    abbrev?: true
    testament?: true
    _all?: true
  }

  export type BooksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which books to aggregate.
     */
    where?: booksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of books to fetch.
     */
    orderBy?: booksOrderByWithRelationInput | booksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: booksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned books
    **/
    _count?: true | BooksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BooksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BooksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BooksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BooksMaxAggregateInputType
  }

  export type GetBooksAggregateType<T extends BooksAggregateArgs> = {
        [P in keyof T & keyof AggregateBooks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooks[P]>
      : GetScalarType<T[P], AggregateBooks[P]>
  }




  export type booksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: booksWhereInput
    orderBy?: booksOrderByWithAggregationInput | booksOrderByWithAggregationInput[]
    by: BooksScalarFieldEnum[] | BooksScalarFieldEnum
    having?: booksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BooksCountAggregateInputType | true
    _avg?: BooksAvgAggregateInputType
    _sum?: BooksSumAggregateInputType
    _min?: BooksMinAggregateInputType
    _max?: BooksMaxAggregateInputType
  }

  export type BooksGroupByOutputType = {
    id: number
    name: string | null
    abbrev: string | null
    testament: string | null
    _count: BooksCountAggregateOutputType | null
    _avg: BooksAvgAggregateOutputType | null
    _sum: BooksSumAggregateOutputType | null
    _min: BooksMinAggregateOutputType | null
    _max: BooksMaxAggregateOutputType | null
  }

  type GetBooksGroupByPayload<T extends booksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BooksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BooksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BooksGroupByOutputType[P]>
            : GetScalarType<T[P], BooksGroupByOutputType[P]>
        }
      >
    >


  export type booksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    abbrev?: boolean
    testament?: boolean
  }, ExtArgs["result"]["books"]>

  export type booksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    abbrev?: boolean
    testament?: boolean
  }, ExtArgs["result"]["books"]>

  export type booksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    abbrev?: boolean
    testament?: boolean
  }, ExtArgs["result"]["books"]>

  export type booksSelectScalar = {
    id?: boolean
    name?: boolean
    abbrev?: boolean
    testament?: boolean
  }

  export type booksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "abbrev" | "testament", ExtArgs["result"]["books"]>

  export type $booksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "books"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      abbrev: string | null
      testament: string | null
    }, ExtArgs["result"]["books"]>
    composites: {}
  }

  type booksGetPayload<S extends boolean | null | undefined | booksDefaultArgs> = $Result.GetResult<Prisma.$booksPayload, S>

  type booksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<booksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BooksCountAggregateInputType | true
    }

  export interface booksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['books'], meta: { name: 'books' } }
    /**
     * Find zero or one Books that matches the filter.
     * @param {booksFindUniqueArgs} args - Arguments to find a Books
     * @example
     * // Get one Books
     * const books = await prisma.books.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends booksFindUniqueArgs>(args: SelectSubset<T, booksFindUniqueArgs<ExtArgs>>): Prisma__booksClient<$Result.GetResult<Prisma.$booksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Books that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {booksFindUniqueOrThrowArgs} args - Arguments to find a Books
     * @example
     * // Get one Books
     * const books = await prisma.books.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends booksFindUniqueOrThrowArgs>(args: SelectSubset<T, booksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__booksClient<$Result.GetResult<Prisma.$booksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {booksFindFirstArgs} args - Arguments to find a Books
     * @example
     * // Get one Books
     * const books = await prisma.books.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends booksFindFirstArgs>(args?: SelectSubset<T, booksFindFirstArgs<ExtArgs>>): Prisma__booksClient<$Result.GetResult<Prisma.$booksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Books that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {booksFindFirstOrThrowArgs} args - Arguments to find a Books
     * @example
     * // Get one Books
     * const books = await prisma.books.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends booksFindFirstOrThrowArgs>(args?: SelectSubset<T, booksFindFirstOrThrowArgs<ExtArgs>>): Prisma__booksClient<$Result.GetResult<Prisma.$booksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {booksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Books
     * const books = await prisma.books.findMany()
     * 
     * // Get first 10 Books
     * const books = await prisma.books.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const booksWithIdOnly = await prisma.books.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends booksFindManyArgs>(args?: SelectSubset<T, booksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$booksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Books.
     * @param {booksCreateArgs} args - Arguments to create a Books.
     * @example
     * // Create one Books
     * const Books = await prisma.books.create({
     *   data: {
     *     // ... data to create a Books
     *   }
     * })
     * 
     */
    create<T extends booksCreateArgs>(args: SelectSubset<T, booksCreateArgs<ExtArgs>>): Prisma__booksClient<$Result.GetResult<Prisma.$booksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Books.
     * @param {booksCreateManyArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const books = await prisma.books.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends booksCreateManyArgs>(args?: SelectSubset<T, booksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Books and returns the data saved in the database.
     * @param {booksCreateManyAndReturnArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const books = await prisma.books.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Books and only return the `id`
     * const booksWithIdOnly = await prisma.books.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends booksCreateManyAndReturnArgs>(args?: SelectSubset<T, booksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$booksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Books.
     * @param {booksDeleteArgs} args - Arguments to delete one Books.
     * @example
     * // Delete one Books
     * const Books = await prisma.books.delete({
     *   where: {
     *     // ... filter to delete one Books
     *   }
     * })
     * 
     */
    delete<T extends booksDeleteArgs>(args: SelectSubset<T, booksDeleteArgs<ExtArgs>>): Prisma__booksClient<$Result.GetResult<Prisma.$booksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Books.
     * @param {booksUpdateArgs} args - Arguments to update one Books.
     * @example
     * // Update one Books
     * const books = await prisma.books.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends booksUpdateArgs>(args: SelectSubset<T, booksUpdateArgs<ExtArgs>>): Prisma__booksClient<$Result.GetResult<Prisma.$booksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Books.
     * @param {booksDeleteManyArgs} args - Arguments to filter Books to delete.
     * @example
     * // Delete a few Books
     * const { count } = await prisma.books.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends booksDeleteManyArgs>(args?: SelectSubset<T, booksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {booksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Books
     * const books = await prisma.books.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends booksUpdateManyArgs>(args: SelectSubset<T, booksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books and returns the data updated in the database.
     * @param {booksUpdateManyAndReturnArgs} args - Arguments to update many Books.
     * @example
     * // Update many Books
     * const books = await prisma.books.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Books and only return the `id`
     * const booksWithIdOnly = await prisma.books.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends booksUpdateManyAndReturnArgs>(args: SelectSubset<T, booksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$booksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Books.
     * @param {booksUpsertArgs} args - Arguments to update or create a Books.
     * @example
     * // Update or create a Books
     * const books = await prisma.books.upsert({
     *   create: {
     *     // ... data to create a Books
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Books we want to update
     *   }
     * })
     */
    upsert<T extends booksUpsertArgs>(args: SelectSubset<T, booksUpsertArgs<ExtArgs>>): Prisma__booksClient<$Result.GetResult<Prisma.$booksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {booksCountArgs} args - Arguments to filter Books to count.
     * @example
     * // Count the number of Books
     * const count = await prisma.books.count({
     *   where: {
     *     // ... the filter for the Books we want to count
     *   }
     * })
    **/
    count<T extends booksCountArgs>(
      args?: Subset<T, booksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BooksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BooksAggregateArgs>(args: Subset<T, BooksAggregateArgs>): Prisma.PrismaPromise<GetBooksAggregateType<T>>

    /**
     * Group by Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {booksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends booksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: booksGroupByArgs['orderBy'] }
        : { orderBy?: booksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, booksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBooksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the books model
   */
  readonly fields: booksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for books.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__booksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the books model
   */
  interface booksFieldRefs {
    readonly id: FieldRef<"books", 'Int'>
    readonly name: FieldRef<"books", 'String'>
    readonly abbrev: FieldRef<"books", 'String'>
    readonly testament: FieldRef<"books", 'String'>
  }
    

  // Custom InputTypes
  /**
   * books findUnique
   */
  export type booksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books
     */
    select?: booksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the books
     */
    omit?: booksOmit<ExtArgs> | null
    /**
     * Filter, which books to fetch.
     */
    where: booksWhereUniqueInput
  }

  /**
   * books findUniqueOrThrow
   */
  export type booksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books
     */
    select?: booksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the books
     */
    omit?: booksOmit<ExtArgs> | null
    /**
     * Filter, which books to fetch.
     */
    where: booksWhereUniqueInput
  }

  /**
   * books findFirst
   */
  export type booksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books
     */
    select?: booksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the books
     */
    omit?: booksOmit<ExtArgs> | null
    /**
     * Filter, which books to fetch.
     */
    where?: booksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of books to fetch.
     */
    orderBy?: booksOrderByWithRelationInput | booksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for books.
     */
    cursor?: booksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of books.
     */
    distinct?: BooksScalarFieldEnum | BooksScalarFieldEnum[]
  }

  /**
   * books findFirstOrThrow
   */
  export type booksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books
     */
    select?: booksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the books
     */
    omit?: booksOmit<ExtArgs> | null
    /**
     * Filter, which books to fetch.
     */
    where?: booksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of books to fetch.
     */
    orderBy?: booksOrderByWithRelationInput | booksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for books.
     */
    cursor?: booksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of books.
     */
    distinct?: BooksScalarFieldEnum | BooksScalarFieldEnum[]
  }

  /**
   * books findMany
   */
  export type booksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books
     */
    select?: booksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the books
     */
    omit?: booksOmit<ExtArgs> | null
    /**
     * Filter, which books to fetch.
     */
    where?: booksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of books to fetch.
     */
    orderBy?: booksOrderByWithRelationInput | booksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing books.
     */
    cursor?: booksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` books.
     */
    skip?: number
    distinct?: BooksScalarFieldEnum | BooksScalarFieldEnum[]
  }

  /**
   * books create
   */
  export type booksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books
     */
    select?: booksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the books
     */
    omit?: booksOmit<ExtArgs> | null
    /**
     * The data needed to create a books.
     */
    data?: XOR<booksCreateInput, booksUncheckedCreateInput>
  }

  /**
   * books createMany
   */
  export type booksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many books.
     */
    data: booksCreateManyInput | booksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * books createManyAndReturn
   */
  export type booksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books
     */
    select?: booksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the books
     */
    omit?: booksOmit<ExtArgs> | null
    /**
     * The data used to create many books.
     */
    data: booksCreateManyInput | booksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * books update
   */
  export type booksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books
     */
    select?: booksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the books
     */
    omit?: booksOmit<ExtArgs> | null
    /**
     * The data needed to update a books.
     */
    data: XOR<booksUpdateInput, booksUncheckedUpdateInput>
    /**
     * Choose, which books to update.
     */
    where: booksWhereUniqueInput
  }

  /**
   * books updateMany
   */
  export type booksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update books.
     */
    data: XOR<booksUpdateManyMutationInput, booksUncheckedUpdateManyInput>
    /**
     * Filter which books to update
     */
    where?: booksWhereInput
    /**
     * Limit how many books to update.
     */
    limit?: number
  }

  /**
   * books updateManyAndReturn
   */
  export type booksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books
     */
    select?: booksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the books
     */
    omit?: booksOmit<ExtArgs> | null
    /**
     * The data used to update books.
     */
    data: XOR<booksUpdateManyMutationInput, booksUncheckedUpdateManyInput>
    /**
     * Filter which books to update
     */
    where?: booksWhereInput
    /**
     * Limit how many books to update.
     */
    limit?: number
  }

  /**
   * books upsert
   */
  export type booksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books
     */
    select?: booksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the books
     */
    omit?: booksOmit<ExtArgs> | null
    /**
     * The filter to search for the books to update in case it exists.
     */
    where: booksWhereUniqueInput
    /**
     * In case the books found by the `where` argument doesn't exist, create a new books with this data.
     */
    create: XOR<booksCreateInput, booksUncheckedCreateInput>
    /**
     * In case the books was found with the provided `where` argument, update it with this data.
     */
    update: XOR<booksUpdateInput, booksUncheckedUpdateInput>
  }

  /**
   * books delete
   */
  export type booksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books
     */
    select?: booksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the books
     */
    omit?: booksOmit<ExtArgs> | null
    /**
     * Filter which books to delete.
     */
    where: booksWhereUniqueInput
  }

  /**
   * books deleteMany
   */
  export type booksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which books to delete
     */
    where?: booksWhereInput
    /**
     * Limit how many books to delete.
     */
    limit?: number
  }

  /**
   * books without action
   */
  export type booksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books
     */
    select?: booksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the books
     */
    omit?: booksOmit<ExtArgs> | null
  }


  /**
   * Model testament
   */

  export type AggregateTestament = {
    _count: TestamentCountAggregateOutputType | null
    _avg: TestamentAvgAggregateOutputType | null
    _sum: TestamentSumAggregateOutputType | null
    _min: TestamentMinAggregateOutputType | null
    _max: TestamentMaxAggregateOutputType | null
  }

  export type TestamentAvgAggregateOutputType = {
    id: number | null
  }

  export type TestamentSumAggregateOutputType = {
    id: number | null
  }

  export type TestamentMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TestamentMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TestamentCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type TestamentAvgAggregateInputType = {
    id?: true
  }

  export type TestamentSumAggregateInputType = {
    id?: true
  }

  export type TestamentMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TestamentMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TestamentCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TestamentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which testament to aggregate.
     */
    where?: testamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of testaments to fetch.
     */
    orderBy?: testamentOrderByWithRelationInput | testamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: testamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` testaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` testaments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned testaments
    **/
    _count?: true | TestamentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestamentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestamentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestamentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestamentMaxAggregateInputType
  }

  export type GetTestamentAggregateType<T extends TestamentAggregateArgs> = {
        [P in keyof T & keyof AggregateTestament]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTestament[P]>
      : GetScalarType<T[P], AggregateTestament[P]>
  }




  export type testamentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: testamentWhereInput
    orderBy?: testamentOrderByWithAggregationInput | testamentOrderByWithAggregationInput[]
    by: TestamentScalarFieldEnum[] | TestamentScalarFieldEnum
    having?: testamentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestamentCountAggregateInputType | true
    _avg?: TestamentAvgAggregateInputType
    _sum?: TestamentSumAggregateInputType
    _min?: TestamentMinAggregateInputType
    _max?: TestamentMaxAggregateInputType
  }

  export type TestamentGroupByOutputType = {
    id: number
    name: string | null
    _count: TestamentCountAggregateOutputType | null
    _avg: TestamentAvgAggregateOutputType | null
    _sum: TestamentSumAggregateOutputType | null
    _min: TestamentMinAggregateOutputType | null
    _max: TestamentMaxAggregateOutputType | null
  }

  type GetTestamentGroupByPayload<T extends testamentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestamentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestamentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestamentGroupByOutputType[P]>
            : GetScalarType<T[P], TestamentGroupByOutputType[P]>
        }
      >
    >


  export type testamentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["testament"]>

  export type testamentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["testament"]>

  export type testamentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["testament"]>

  export type testamentSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type testamentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["testament"]>

  export type $testamentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "testament"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
    }, ExtArgs["result"]["testament"]>
    composites: {}
  }

  type testamentGetPayload<S extends boolean | null | undefined | testamentDefaultArgs> = $Result.GetResult<Prisma.$testamentPayload, S>

  type testamentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<testamentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestamentCountAggregateInputType | true
    }

  export interface testamentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['testament'], meta: { name: 'testament' } }
    /**
     * Find zero or one Testament that matches the filter.
     * @param {testamentFindUniqueArgs} args - Arguments to find a Testament
     * @example
     * // Get one Testament
     * const testament = await prisma.testament.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends testamentFindUniqueArgs>(args: SelectSubset<T, testamentFindUniqueArgs<ExtArgs>>): Prisma__testamentClient<$Result.GetResult<Prisma.$testamentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Testament that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {testamentFindUniqueOrThrowArgs} args - Arguments to find a Testament
     * @example
     * // Get one Testament
     * const testament = await prisma.testament.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends testamentFindUniqueOrThrowArgs>(args: SelectSubset<T, testamentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__testamentClient<$Result.GetResult<Prisma.$testamentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Testament that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testamentFindFirstArgs} args - Arguments to find a Testament
     * @example
     * // Get one Testament
     * const testament = await prisma.testament.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends testamentFindFirstArgs>(args?: SelectSubset<T, testamentFindFirstArgs<ExtArgs>>): Prisma__testamentClient<$Result.GetResult<Prisma.$testamentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Testament that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testamentFindFirstOrThrowArgs} args - Arguments to find a Testament
     * @example
     * // Get one Testament
     * const testament = await prisma.testament.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends testamentFindFirstOrThrowArgs>(args?: SelectSubset<T, testamentFindFirstOrThrowArgs<ExtArgs>>): Prisma__testamentClient<$Result.GetResult<Prisma.$testamentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Testaments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testamentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Testaments
     * const testaments = await prisma.testament.findMany()
     * 
     * // Get first 10 Testaments
     * const testaments = await prisma.testament.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testamentWithIdOnly = await prisma.testament.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends testamentFindManyArgs>(args?: SelectSubset<T, testamentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$testamentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Testament.
     * @param {testamentCreateArgs} args - Arguments to create a Testament.
     * @example
     * // Create one Testament
     * const Testament = await prisma.testament.create({
     *   data: {
     *     // ... data to create a Testament
     *   }
     * })
     * 
     */
    create<T extends testamentCreateArgs>(args: SelectSubset<T, testamentCreateArgs<ExtArgs>>): Prisma__testamentClient<$Result.GetResult<Prisma.$testamentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Testaments.
     * @param {testamentCreateManyArgs} args - Arguments to create many Testaments.
     * @example
     * // Create many Testaments
     * const testament = await prisma.testament.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends testamentCreateManyArgs>(args?: SelectSubset<T, testamentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Testaments and returns the data saved in the database.
     * @param {testamentCreateManyAndReturnArgs} args - Arguments to create many Testaments.
     * @example
     * // Create many Testaments
     * const testament = await prisma.testament.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Testaments and only return the `id`
     * const testamentWithIdOnly = await prisma.testament.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends testamentCreateManyAndReturnArgs>(args?: SelectSubset<T, testamentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$testamentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Testament.
     * @param {testamentDeleteArgs} args - Arguments to delete one Testament.
     * @example
     * // Delete one Testament
     * const Testament = await prisma.testament.delete({
     *   where: {
     *     // ... filter to delete one Testament
     *   }
     * })
     * 
     */
    delete<T extends testamentDeleteArgs>(args: SelectSubset<T, testamentDeleteArgs<ExtArgs>>): Prisma__testamentClient<$Result.GetResult<Prisma.$testamentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Testament.
     * @param {testamentUpdateArgs} args - Arguments to update one Testament.
     * @example
     * // Update one Testament
     * const testament = await prisma.testament.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends testamentUpdateArgs>(args: SelectSubset<T, testamentUpdateArgs<ExtArgs>>): Prisma__testamentClient<$Result.GetResult<Prisma.$testamentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Testaments.
     * @param {testamentDeleteManyArgs} args - Arguments to filter Testaments to delete.
     * @example
     * // Delete a few Testaments
     * const { count } = await prisma.testament.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends testamentDeleteManyArgs>(args?: SelectSubset<T, testamentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Testaments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testamentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Testaments
     * const testament = await prisma.testament.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends testamentUpdateManyArgs>(args: SelectSubset<T, testamentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Testaments and returns the data updated in the database.
     * @param {testamentUpdateManyAndReturnArgs} args - Arguments to update many Testaments.
     * @example
     * // Update many Testaments
     * const testament = await prisma.testament.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Testaments and only return the `id`
     * const testamentWithIdOnly = await prisma.testament.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends testamentUpdateManyAndReturnArgs>(args: SelectSubset<T, testamentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$testamentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Testament.
     * @param {testamentUpsertArgs} args - Arguments to update or create a Testament.
     * @example
     * // Update or create a Testament
     * const testament = await prisma.testament.upsert({
     *   create: {
     *     // ... data to create a Testament
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Testament we want to update
     *   }
     * })
     */
    upsert<T extends testamentUpsertArgs>(args: SelectSubset<T, testamentUpsertArgs<ExtArgs>>): Prisma__testamentClient<$Result.GetResult<Prisma.$testamentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Testaments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testamentCountArgs} args - Arguments to filter Testaments to count.
     * @example
     * // Count the number of Testaments
     * const count = await prisma.testament.count({
     *   where: {
     *     // ... the filter for the Testaments we want to count
     *   }
     * })
    **/
    count<T extends testamentCountArgs>(
      args?: Subset<T, testamentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestamentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Testament.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestamentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TestamentAggregateArgs>(args: Subset<T, TestamentAggregateArgs>): Prisma.PrismaPromise<GetTestamentAggregateType<T>>

    /**
     * Group by Testament.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testamentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends testamentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: testamentGroupByArgs['orderBy'] }
        : { orderBy?: testamentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, testamentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestamentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the testament model
   */
  readonly fields: testamentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for testament.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__testamentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the testament model
   */
  interface testamentFieldRefs {
    readonly id: FieldRef<"testament", 'Int'>
    readonly name: FieldRef<"testament", 'String'>
  }
    

  // Custom InputTypes
  /**
   * testament findUnique
   */
  export type testamentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testament
     */
    select?: testamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testament
     */
    omit?: testamentOmit<ExtArgs> | null
    /**
     * Filter, which testament to fetch.
     */
    where: testamentWhereUniqueInput
  }

  /**
   * testament findUniqueOrThrow
   */
  export type testamentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testament
     */
    select?: testamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testament
     */
    omit?: testamentOmit<ExtArgs> | null
    /**
     * Filter, which testament to fetch.
     */
    where: testamentWhereUniqueInput
  }

  /**
   * testament findFirst
   */
  export type testamentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testament
     */
    select?: testamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testament
     */
    omit?: testamentOmit<ExtArgs> | null
    /**
     * Filter, which testament to fetch.
     */
    where?: testamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of testaments to fetch.
     */
    orderBy?: testamentOrderByWithRelationInput | testamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for testaments.
     */
    cursor?: testamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` testaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` testaments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of testaments.
     */
    distinct?: TestamentScalarFieldEnum | TestamentScalarFieldEnum[]
  }

  /**
   * testament findFirstOrThrow
   */
  export type testamentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testament
     */
    select?: testamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testament
     */
    omit?: testamentOmit<ExtArgs> | null
    /**
     * Filter, which testament to fetch.
     */
    where?: testamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of testaments to fetch.
     */
    orderBy?: testamentOrderByWithRelationInput | testamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for testaments.
     */
    cursor?: testamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` testaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` testaments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of testaments.
     */
    distinct?: TestamentScalarFieldEnum | TestamentScalarFieldEnum[]
  }

  /**
   * testament findMany
   */
  export type testamentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testament
     */
    select?: testamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testament
     */
    omit?: testamentOmit<ExtArgs> | null
    /**
     * Filter, which testaments to fetch.
     */
    where?: testamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of testaments to fetch.
     */
    orderBy?: testamentOrderByWithRelationInput | testamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing testaments.
     */
    cursor?: testamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` testaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` testaments.
     */
    skip?: number
    distinct?: TestamentScalarFieldEnum | TestamentScalarFieldEnum[]
  }

  /**
   * testament create
   */
  export type testamentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testament
     */
    select?: testamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testament
     */
    omit?: testamentOmit<ExtArgs> | null
    /**
     * The data needed to create a testament.
     */
    data?: XOR<testamentCreateInput, testamentUncheckedCreateInput>
  }

  /**
   * testament createMany
   */
  export type testamentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many testaments.
     */
    data: testamentCreateManyInput | testamentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * testament createManyAndReturn
   */
  export type testamentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testament
     */
    select?: testamentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the testament
     */
    omit?: testamentOmit<ExtArgs> | null
    /**
     * The data used to create many testaments.
     */
    data: testamentCreateManyInput | testamentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * testament update
   */
  export type testamentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testament
     */
    select?: testamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testament
     */
    omit?: testamentOmit<ExtArgs> | null
    /**
     * The data needed to update a testament.
     */
    data: XOR<testamentUpdateInput, testamentUncheckedUpdateInput>
    /**
     * Choose, which testament to update.
     */
    where: testamentWhereUniqueInput
  }

  /**
   * testament updateMany
   */
  export type testamentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update testaments.
     */
    data: XOR<testamentUpdateManyMutationInput, testamentUncheckedUpdateManyInput>
    /**
     * Filter which testaments to update
     */
    where?: testamentWhereInput
    /**
     * Limit how many testaments to update.
     */
    limit?: number
  }

  /**
   * testament updateManyAndReturn
   */
  export type testamentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testament
     */
    select?: testamentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the testament
     */
    omit?: testamentOmit<ExtArgs> | null
    /**
     * The data used to update testaments.
     */
    data: XOR<testamentUpdateManyMutationInput, testamentUncheckedUpdateManyInput>
    /**
     * Filter which testaments to update
     */
    where?: testamentWhereInput
    /**
     * Limit how many testaments to update.
     */
    limit?: number
  }

  /**
   * testament upsert
   */
  export type testamentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testament
     */
    select?: testamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testament
     */
    omit?: testamentOmit<ExtArgs> | null
    /**
     * The filter to search for the testament to update in case it exists.
     */
    where: testamentWhereUniqueInput
    /**
     * In case the testament found by the `where` argument doesn't exist, create a new testament with this data.
     */
    create: XOR<testamentCreateInput, testamentUncheckedCreateInput>
    /**
     * In case the testament was found with the provided `where` argument, update it with this data.
     */
    update: XOR<testamentUpdateInput, testamentUncheckedUpdateInput>
  }

  /**
   * testament delete
   */
  export type testamentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testament
     */
    select?: testamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testament
     */
    omit?: testamentOmit<ExtArgs> | null
    /**
     * Filter which testament to delete.
     */
    where: testamentWhereUniqueInput
  }

  /**
   * testament deleteMany
   */
  export type testamentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which testaments to delete
     */
    where?: testamentWhereInput
    /**
     * Limit how many testaments to delete.
     */
    limit?: number
  }

  /**
   * testament without action
   */
  export type testamentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the testament
     */
    select?: testamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the testament
     */
    omit?: testamentOmit<ExtArgs> | null
  }


  /**
   * Model verses
   */

  export type AggregateVerses = {
    _count: VersesCountAggregateOutputType | null
    _avg: VersesAvgAggregateOutputType | null
    _sum: VersesSumAggregateOutputType | null
    _min: VersesMinAggregateOutputType | null
    _max: VersesMaxAggregateOutputType | null
  }

  export type VersesAvgAggregateOutputType = {
    id: number | null
    testament: number | null
    book: number | null
    chapter: number | null
    verse: number | null
  }

  export type VersesSumAggregateOutputType = {
    id: number | null
    testament: number | null
    book: number | null
    chapter: number | null
    verse: number | null
  }

  export type VersesMinAggregateOutputType = {
    id: number | null
    version: string | null
    testament: number | null
    book: number | null
    chapter: number | null
    verse: number | null
    text: string | null
  }

  export type VersesMaxAggregateOutputType = {
    id: number | null
    version: string | null
    testament: number | null
    book: number | null
    chapter: number | null
    verse: number | null
    text: string | null
  }

  export type VersesCountAggregateOutputType = {
    id: number
    version: number
    testament: number
    book: number
    chapter: number
    verse: number
    text: number
    _all: number
  }


  export type VersesAvgAggregateInputType = {
    id?: true
    testament?: true
    book?: true
    chapter?: true
    verse?: true
  }

  export type VersesSumAggregateInputType = {
    id?: true
    testament?: true
    book?: true
    chapter?: true
    verse?: true
  }

  export type VersesMinAggregateInputType = {
    id?: true
    version?: true
    testament?: true
    book?: true
    chapter?: true
    verse?: true
    text?: true
  }

  export type VersesMaxAggregateInputType = {
    id?: true
    version?: true
    testament?: true
    book?: true
    chapter?: true
    verse?: true
    text?: true
  }

  export type VersesCountAggregateInputType = {
    id?: true
    version?: true
    testament?: true
    book?: true
    chapter?: true
    verse?: true
    text?: true
    _all?: true
  }

  export type VersesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which verses to aggregate.
     */
    where?: versesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of verses to fetch.
     */
    orderBy?: versesOrderByWithRelationInput | versesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: versesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` verses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` verses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned verses
    **/
    _count?: true | VersesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VersesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VersesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VersesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VersesMaxAggregateInputType
  }

  export type GetVersesAggregateType<T extends VersesAggregateArgs> = {
        [P in keyof T & keyof AggregateVerses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerses[P]>
      : GetScalarType<T[P], AggregateVerses[P]>
  }




  export type versesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: versesWhereInput
    orderBy?: versesOrderByWithAggregationInput | versesOrderByWithAggregationInput[]
    by: VersesScalarFieldEnum[] | VersesScalarFieldEnum
    having?: versesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VersesCountAggregateInputType | true
    _avg?: VersesAvgAggregateInputType
    _sum?: VersesSumAggregateInputType
    _min?: VersesMinAggregateInputType
    _max?: VersesMaxAggregateInputType
  }

  export type VersesGroupByOutputType = {
    id: number
    version: string | null
    testament: number | null
    book: number | null
    chapter: number | null
    verse: number | null
    text: string | null
    _count: VersesCountAggregateOutputType | null
    _avg: VersesAvgAggregateOutputType | null
    _sum: VersesSumAggregateOutputType | null
    _min: VersesMinAggregateOutputType | null
    _max: VersesMaxAggregateOutputType | null
  }

  type GetVersesGroupByPayload<T extends versesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VersesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VersesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VersesGroupByOutputType[P]>
            : GetScalarType<T[P], VersesGroupByOutputType[P]>
        }
      >
    >


  export type versesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    version?: boolean
    testament?: boolean
    book?: boolean
    chapter?: boolean
    verse?: boolean
    text?: boolean
  }, ExtArgs["result"]["verses"]>

  export type versesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    version?: boolean
    testament?: boolean
    book?: boolean
    chapter?: boolean
    verse?: boolean
    text?: boolean
  }, ExtArgs["result"]["verses"]>

  export type versesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    version?: boolean
    testament?: boolean
    book?: boolean
    chapter?: boolean
    verse?: boolean
    text?: boolean
  }, ExtArgs["result"]["verses"]>

  export type versesSelectScalar = {
    id?: boolean
    version?: boolean
    testament?: boolean
    book?: boolean
    chapter?: boolean
    verse?: boolean
    text?: boolean
  }

  export type versesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "version" | "testament" | "book" | "chapter" | "verse" | "text", ExtArgs["result"]["verses"]>

  export type $versesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "verses"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      version: string | null
      testament: number | null
      book: number | null
      chapter: number | null
      verse: number | null
      text: string | null
    }, ExtArgs["result"]["verses"]>
    composites: {}
  }

  type versesGetPayload<S extends boolean | null | undefined | versesDefaultArgs> = $Result.GetResult<Prisma.$versesPayload, S>

  type versesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<versesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VersesCountAggregateInputType | true
    }

  export interface versesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['verses'], meta: { name: 'verses' } }
    /**
     * Find zero or one Verses that matches the filter.
     * @param {versesFindUniqueArgs} args - Arguments to find a Verses
     * @example
     * // Get one Verses
     * const verses = await prisma.verses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends versesFindUniqueArgs>(args: SelectSubset<T, versesFindUniqueArgs<ExtArgs>>): Prisma__versesClient<$Result.GetResult<Prisma.$versesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Verses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {versesFindUniqueOrThrowArgs} args - Arguments to find a Verses
     * @example
     * // Get one Verses
     * const verses = await prisma.verses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends versesFindUniqueOrThrowArgs>(args: SelectSubset<T, versesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__versesClient<$Result.GetResult<Prisma.$versesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {versesFindFirstArgs} args - Arguments to find a Verses
     * @example
     * // Get one Verses
     * const verses = await prisma.verses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends versesFindFirstArgs>(args?: SelectSubset<T, versesFindFirstArgs<ExtArgs>>): Prisma__versesClient<$Result.GetResult<Prisma.$versesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Verses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {versesFindFirstOrThrowArgs} args - Arguments to find a Verses
     * @example
     * // Get one Verses
     * const verses = await prisma.verses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends versesFindFirstOrThrowArgs>(args?: SelectSubset<T, versesFindFirstOrThrowArgs<ExtArgs>>): Prisma__versesClient<$Result.GetResult<Prisma.$versesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Verses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {versesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verses
     * const verses = await prisma.verses.findMany()
     * 
     * // Get first 10 Verses
     * const verses = await prisma.verses.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const versesWithIdOnly = await prisma.verses.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends versesFindManyArgs>(args?: SelectSubset<T, versesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$versesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Verses.
     * @param {versesCreateArgs} args - Arguments to create a Verses.
     * @example
     * // Create one Verses
     * const Verses = await prisma.verses.create({
     *   data: {
     *     // ... data to create a Verses
     *   }
     * })
     * 
     */
    create<T extends versesCreateArgs>(args: SelectSubset<T, versesCreateArgs<ExtArgs>>): Prisma__versesClient<$Result.GetResult<Prisma.$versesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Verses.
     * @param {versesCreateManyArgs} args - Arguments to create many Verses.
     * @example
     * // Create many Verses
     * const verses = await prisma.verses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends versesCreateManyArgs>(args?: SelectSubset<T, versesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Verses and returns the data saved in the database.
     * @param {versesCreateManyAndReturnArgs} args - Arguments to create many Verses.
     * @example
     * // Create many Verses
     * const verses = await prisma.verses.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Verses and only return the `id`
     * const versesWithIdOnly = await prisma.verses.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends versesCreateManyAndReturnArgs>(args?: SelectSubset<T, versesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$versesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Verses.
     * @param {versesDeleteArgs} args - Arguments to delete one Verses.
     * @example
     * // Delete one Verses
     * const Verses = await prisma.verses.delete({
     *   where: {
     *     // ... filter to delete one Verses
     *   }
     * })
     * 
     */
    delete<T extends versesDeleteArgs>(args: SelectSubset<T, versesDeleteArgs<ExtArgs>>): Prisma__versesClient<$Result.GetResult<Prisma.$versesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Verses.
     * @param {versesUpdateArgs} args - Arguments to update one Verses.
     * @example
     * // Update one Verses
     * const verses = await prisma.verses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends versesUpdateArgs>(args: SelectSubset<T, versesUpdateArgs<ExtArgs>>): Prisma__versesClient<$Result.GetResult<Prisma.$versesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Verses.
     * @param {versesDeleteManyArgs} args - Arguments to filter Verses to delete.
     * @example
     * // Delete a few Verses
     * const { count } = await prisma.verses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends versesDeleteManyArgs>(args?: SelectSubset<T, versesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {versesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verses
     * const verses = await prisma.verses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends versesUpdateManyArgs>(args: SelectSubset<T, versesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verses and returns the data updated in the database.
     * @param {versesUpdateManyAndReturnArgs} args - Arguments to update many Verses.
     * @example
     * // Update many Verses
     * const verses = await prisma.verses.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Verses and only return the `id`
     * const versesWithIdOnly = await prisma.verses.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends versesUpdateManyAndReturnArgs>(args: SelectSubset<T, versesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$versesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Verses.
     * @param {versesUpsertArgs} args - Arguments to update or create a Verses.
     * @example
     * // Update or create a Verses
     * const verses = await prisma.verses.upsert({
     *   create: {
     *     // ... data to create a Verses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verses we want to update
     *   }
     * })
     */
    upsert<T extends versesUpsertArgs>(args: SelectSubset<T, versesUpsertArgs<ExtArgs>>): Prisma__versesClient<$Result.GetResult<Prisma.$versesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Verses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {versesCountArgs} args - Arguments to filter Verses to count.
     * @example
     * // Count the number of Verses
     * const count = await prisma.verses.count({
     *   where: {
     *     // ... the filter for the Verses we want to count
     *   }
     * })
    **/
    count<T extends versesCountArgs>(
      args?: Subset<T, versesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VersesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VersesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VersesAggregateArgs>(args: Subset<T, VersesAggregateArgs>): Prisma.PrismaPromise<GetVersesAggregateType<T>>

    /**
     * Group by Verses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {versesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends versesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: versesGroupByArgs['orderBy'] }
        : { orderBy?: versesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, versesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVersesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the verses model
   */
  readonly fields: versesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for verses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__versesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the verses model
   */
  interface versesFieldRefs {
    readonly id: FieldRef<"verses", 'Int'>
    readonly version: FieldRef<"verses", 'String'>
    readonly testament: FieldRef<"verses", 'Int'>
    readonly book: FieldRef<"verses", 'Int'>
    readonly chapter: FieldRef<"verses", 'Int'>
    readonly verse: FieldRef<"verses", 'Int'>
    readonly text: FieldRef<"verses", 'String'>
  }
    

  // Custom InputTypes
  /**
   * verses findUnique
   */
  export type versesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verses
     */
    select?: versesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verses
     */
    omit?: versesOmit<ExtArgs> | null
    /**
     * Filter, which verses to fetch.
     */
    where: versesWhereUniqueInput
  }

  /**
   * verses findUniqueOrThrow
   */
  export type versesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verses
     */
    select?: versesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verses
     */
    omit?: versesOmit<ExtArgs> | null
    /**
     * Filter, which verses to fetch.
     */
    where: versesWhereUniqueInput
  }

  /**
   * verses findFirst
   */
  export type versesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verses
     */
    select?: versesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verses
     */
    omit?: versesOmit<ExtArgs> | null
    /**
     * Filter, which verses to fetch.
     */
    where?: versesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of verses to fetch.
     */
    orderBy?: versesOrderByWithRelationInput | versesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for verses.
     */
    cursor?: versesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` verses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` verses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of verses.
     */
    distinct?: VersesScalarFieldEnum | VersesScalarFieldEnum[]
  }

  /**
   * verses findFirstOrThrow
   */
  export type versesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verses
     */
    select?: versesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verses
     */
    omit?: versesOmit<ExtArgs> | null
    /**
     * Filter, which verses to fetch.
     */
    where?: versesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of verses to fetch.
     */
    orderBy?: versesOrderByWithRelationInput | versesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for verses.
     */
    cursor?: versesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` verses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` verses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of verses.
     */
    distinct?: VersesScalarFieldEnum | VersesScalarFieldEnum[]
  }

  /**
   * verses findMany
   */
  export type versesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verses
     */
    select?: versesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verses
     */
    omit?: versesOmit<ExtArgs> | null
    /**
     * Filter, which verses to fetch.
     */
    where?: versesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of verses to fetch.
     */
    orderBy?: versesOrderByWithRelationInput | versesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing verses.
     */
    cursor?: versesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` verses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` verses.
     */
    skip?: number
    distinct?: VersesScalarFieldEnum | VersesScalarFieldEnum[]
  }

  /**
   * verses create
   */
  export type versesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verses
     */
    select?: versesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verses
     */
    omit?: versesOmit<ExtArgs> | null
    /**
     * The data needed to create a verses.
     */
    data?: XOR<versesCreateInput, versesUncheckedCreateInput>
  }

  /**
   * verses createMany
   */
  export type versesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many verses.
     */
    data: versesCreateManyInput | versesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * verses createManyAndReturn
   */
  export type versesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verses
     */
    select?: versesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the verses
     */
    omit?: versesOmit<ExtArgs> | null
    /**
     * The data used to create many verses.
     */
    data: versesCreateManyInput | versesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * verses update
   */
  export type versesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verses
     */
    select?: versesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verses
     */
    omit?: versesOmit<ExtArgs> | null
    /**
     * The data needed to update a verses.
     */
    data: XOR<versesUpdateInput, versesUncheckedUpdateInput>
    /**
     * Choose, which verses to update.
     */
    where: versesWhereUniqueInput
  }

  /**
   * verses updateMany
   */
  export type versesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update verses.
     */
    data: XOR<versesUpdateManyMutationInput, versesUncheckedUpdateManyInput>
    /**
     * Filter which verses to update
     */
    where?: versesWhereInput
    /**
     * Limit how many verses to update.
     */
    limit?: number
  }

  /**
   * verses updateManyAndReturn
   */
  export type versesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verses
     */
    select?: versesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the verses
     */
    omit?: versesOmit<ExtArgs> | null
    /**
     * The data used to update verses.
     */
    data: XOR<versesUpdateManyMutationInput, versesUncheckedUpdateManyInput>
    /**
     * Filter which verses to update
     */
    where?: versesWhereInput
    /**
     * Limit how many verses to update.
     */
    limit?: number
  }

  /**
   * verses upsert
   */
  export type versesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verses
     */
    select?: versesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verses
     */
    omit?: versesOmit<ExtArgs> | null
    /**
     * The filter to search for the verses to update in case it exists.
     */
    where: versesWhereUniqueInput
    /**
     * In case the verses found by the `where` argument doesn't exist, create a new verses with this data.
     */
    create: XOR<versesCreateInput, versesUncheckedCreateInput>
    /**
     * In case the verses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<versesUpdateInput, versesUncheckedUpdateInput>
  }

  /**
   * verses delete
   */
  export type versesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verses
     */
    select?: versesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verses
     */
    omit?: versesOmit<ExtArgs> | null
    /**
     * Filter which verses to delete.
     */
    where: versesWhereUniqueInput
  }

  /**
   * verses deleteMany
   */
  export type versesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which verses to delete
     */
    where?: versesWhereInput
    /**
     * Limit how many verses to delete.
     */
    limit?: number
  }

  /**
   * verses without action
   */
  export type versesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the verses
     */
    select?: versesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the verses
     */
    omit?: versesOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BooksScalarFieldEnum: {
    id: 'id',
    name: 'name',
    abbrev: 'abbrev',
    testament: 'testament'
  };

  export type BooksScalarFieldEnum = (typeof BooksScalarFieldEnum)[keyof typeof BooksScalarFieldEnum]


  export const TestamentScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TestamentScalarFieldEnum = (typeof TestamentScalarFieldEnum)[keyof typeof TestamentScalarFieldEnum]


  export const VersesScalarFieldEnum: {
    id: 'id',
    version: 'version',
    testament: 'testament',
    book: 'book',
    chapter: 'chapter',
    verse: 'verse',
    text: 'text'
  };

  export type VersesScalarFieldEnum = (typeof VersesScalarFieldEnum)[keyof typeof VersesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type booksWhereInput = {
    AND?: booksWhereInput | booksWhereInput[]
    OR?: booksWhereInput[]
    NOT?: booksWhereInput | booksWhereInput[]
    id?: IntFilter<"books"> | number
    name?: StringNullableFilter<"books"> | string | null
    abbrev?: StringNullableFilter<"books"> | string | null
    testament?: StringNullableFilter<"books"> | string | null
  }

  export type booksOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    abbrev?: SortOrderInput | SortOrder
    testament?: SortOrderInput | SortOrder
  }

  export type booksWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: booksWhereInput | booksWhereInput[]
    OR?: booksWhereInput[]
    NOT?: booksWhereInput | booksWhereInput[]
    name?: StringNullableFilter<"books"> | string | null
    abbrev?: StringNullableFilter<"books"> | string | null
    testament?: StringNullableFilter<"books"> | string | null
  }, "id">

  export type booksOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    abbrev?: SortOrderInput | SortOrder
    testament?: SortOrderInput | SortOrder
    _count?: booksCountOrderByAggregateInput
    _avg?: booksAvgOrderByAggregateInput
    _max?: booksMaxOrderByAggregateInput
    _min?: booksMinOrderByAggregateInput
    _sum?: booksSumOrderByAggregateInput
  }

  export type booksScalarWhereWithAggregatesInput = {
    AND?: booksScalarWhereWithAggregatesInput | booksScalarWhereWithAggregatesInput[]
    OR?: booksScalarWhereWithAggregatesInput[]
    NOT?: booksScalarWhereWithAggregatesInput | booksScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"books"> | number
    name?: StringNullableWithAggregatesFilter<"books"> | string | null
    abbrev?: StringNullableWithAggregatesFilter<"books"> | string | null
    testament?: StringNullableWithAggregatesFilter<"books"> | string | null
  }

  export type testamentWhereInput = {
    AND?: testamentWhereInput | testamentWhereInput[]
    OR?: testamentWhereInput[]
    NOT?: testamentWhereInput | testamentWhereInput[]
    id?: IntFilter<"testament"> | number
    name?: StringNullableFilter<"testament"> | string | null
  }

  export type testamentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
  }

  export type testamentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: testamentWhereInput | testamentWhereInput[]
    OR?: testamentWhereInput[]
    NOT?: testamentWhereInput | testamentWhereInput[]
    name?: StringNullableFilter<"testament"> | string | null
  }, "id">

  export type testamentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    _count?: testamentCountOrderByAggregateInput
    _avg?: testamentAvgOrderByAggregateInput
    _max?: testamentMaxOrderByAggregateInput
    _min?: testamentMinOrderByAggregateInput
    _sum?: testamentSumOrderByAggregateInput
  }

  export type testamentScalarWhereWithAggregatesInput = {
    AND?: testamentScalarWhereWithAggregatesInput | testamentScalarWhereWithAggregatesInput[]
    OR?: testamentScalarWhereWithAggregatesInput[]
    NOT?: testamentScalarWhereWithAggregatesInput | testamentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"testament"> | number
    name?: StringNullableWithAggregatesFilter<"testament"> | string | null
  }

  export type versesWhereInput = {
    AND?: versesWhereInput | versesWhereInput[]
    OR?: versesWhereInput[]
    NOT?: versesWhereInput | versesWhereInput[]
    id?: IntFilter<"verses"> | number
    version?: StringNullableFilter<"verses"> | string | null
    testament?: IntNullableFilter<"verses"> | number | null
    book?: IntNullableFilter<"verses"> | number | null
    chapter?: IntNullableFilter<"verses"> | number | null
    verse?: IntNullableFilter<"verses"> | number | null
    text?: StringNullableFilter<"verses"> | string | null
  }

  export type versesOrderByWithRelationInput = {
    id?: SortOrder
    version?: SortOrderInput | SortOrder
    testament?: SortOrderInput | SortOrder
    book?: SortOrderInput | SortOrder
    chapter?: SortOrderInput | SortOrder
    verse?: SortOrderInput | SortOrder
    text?: SortOrderInput | SortOrder
  }

  export type versesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: versesWhereInput | versesWhereInput[]
    OR?: versesWhereInput[]
    NOT?: versesWhereInput | versesWhereInput[]
    version?: StringNullableFilter<"verses"> | string | null
    testament?: IntNullableFilter<"verses"> | number | null
    book?: IntNullableFilter<"verses"> | number | null
    chapter?: IntNullableFilter<"verses"> | number | null
    verse?: IntNullableFilter<"verses"> | number | null
    text?: StringNullableFilter<"verses"> | string | null
  }, "id">

  export type versesOrderByWithAggregationInput = {
    id?: SortOrder
    version?: SortOrderInput | SortOrder
    testament?: SortOrderInput | SortOrder
    book?: SortOrderInput | SortOrder
    chapter?: SortOrderInput | SortOrder
    verse?: SortOrderInput | SortOrder
    text?: SortOrderInput | SortOrder
    _count?: versesCountOrderByAggregateInput
    _avg?: versesAvgOrderByAggregateInput
    _max?: versesMaxOrderByAggregateInput
    _min?: versesMinOrderByAggregateInput
    _sum?: versesSumOrderByAggregateInput
  }

  export type versesScalarWhereWithAggregatesInput = {
    AND?: versesScalarWhereWithAggregatesInput | versesScalarWhereWithAggregatesInput[]
    OR?: versesScalarWhereWithAggregatesInput[]
    NOT?: versesScalarWhereWithAggregatesInput | versesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"verses"> | number
    version?: StringNullableWithAggregatesFilter<"verses"> | string | null
    testament?: IntNullableWithAggregatesFilter<"verses"> | number | null
    book?: IntNullableWithAggregatesFilter<"verses"> | number | null
    chapter?: IntNullableWithAggregatesFilter<"verses"> | number | null
    verse?: IntNullableWithAggregatesFilter<"verses"> | number | null
    text?: StringNullableWithAggregatesFilter<"verses"> | string | null
  }

  export type booksCreateInput = {
    name?: string | null
    abbrev?: string | null
    testament?: string | null
  }

  export type booksUncheckedCreateInput = {
    id?: number
    name?: string | null
    abbrev?: string | null
    testament?: string | null
  }

  export type booksUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    abbrev?: NullableStringFieldUpdateOperationsInput | string | null
    testament?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type booksUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    abbrev?: NullableStringFieldUpdateOperationsInput | string | null
    testament?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type booksCreateManyInput = {
    id?: number
    name?: string | null
    abbrev?: string | null
    testament?: string | null
  }

  export type booksUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    abbrev?: NullableStringFieldUpdateOperationsInput | string | null
    testament?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type booksUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    abbrev?: NullableStringFieldUpdateOperationsInput | string | null
    testament?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type testamentCreateInput = {
    name?: string | null
  }

  export type testamentUncheckedCreateInput = {
    id?: number
    name?: string | null
  }

  export type testamentUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type testamentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type testamentCreateManyInput = {
    id?: number
    name?: string | null
  }

  export type testamentUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type testamentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type versesCreateInput = {
    version?: string | null
    testament?: number | null
    book?: number | null
    chapter?: number | null
    verse?: number | null
    text?: string | null
  }

  export type versesUncheckedCreateInput = {
    id?: number
    version?: string | null
    testament?: number | null
    book?: number | null
    chapter?: number | null
    verse?: number | null
    text?: string | null
  }

  export type versesUpdateInput = {
    version?: NullableStringFieldUpdateOperationsInput | string | null
    testament?: NullableIntFieldUpdateOperationsInput | number | null
    book?: NullableIntFieldUpdateOperationsInput | number | null
    chapter?: NullableIntFieldUpdateOperationsInput | number | null
    verse?: NullableIntFieldUpdateOperationsInput | number | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type versesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    version?: NullableStringFieldUpdateOperationsInput | string | null
    testament?: NullableIntFieldUpdateOperationsInput | number | null
    book?: NullableIntFieldUpdateOperationsInput | number | null
    chapter?: NullableIntFieldUpdateOperationsInput | number | null
    verse?: NullableIntFieldUpdateOperationsInput | number | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type versesCreateManyInput = {
    id?: number
    version?: string | null
    testament?: number | null
    book?: number | null
    chapter?: number | null
    verse?: number | null
    text?: string | null
  }

  export type versesUpdateManyMutationInput = {
    version?: NullableStringFieldUpdateOperationsInput | string | null
    testament?: NullableIntFieldUpdateOperationsInput | number | null
    book?: NullableIntFieldUpdateOperationsInput | number | null
    chapter?: NullableIntFieldUpdateOperationsInput | number | null
    verse?: NullableIntFieldUpdateOperationsInput | number | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type versesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    version?: NullableStringFieldUpdateOperationsInput | string | null
    testament?: NullableIntFieldUpdateOperationsInput | number | null
    book?: NullableIntFieldUpdateOperationsInput | number | null
    chapter?: NullableIntFieldUpdateOperationsInput | number | null
    verse?: NullableIntFieldUpdateOperationsInput | number | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type booksCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    abbrev?: SortOrder
    testament?: SortOrder
  }

  export type booksAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type booksMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    abbrev?: SortOrder
    testament?: SortOrder
  }

  export type booksMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    abbrev?: SortOrder
    testament?: SortOrder
  }

  export type booksSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type testamentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type testamentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type testamentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type testamentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type testamentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type versesCountOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    testament?: SortOrder
    book?: SortOrder
    chapter?: SortOrder
    verse?: SortOrder
    text?: SortOrder
  }

  export type versesAvgOrderByAggregateInput = {
    id?: SortOrder
    testament?: SortOrder
    book?: SortOrder
    chapter?: SortOrder
    verse?: SortOrder
  }

  export type versesMaxOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    testament?: SortOrder
    book?: SortOrder
    chapter?: SortOrder
    verse?: SortOrder
    text?: SortOrder
  }

  export type versesMinOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    testament?: SortOrder
    book?: SortOrder
    chapter?: SortOrder
    verse?: SortOrder
    text?: SortOrder
  }

  export type versesSumOrderByAggregateInput = {
    id?: SortOrder
    testament?: SortOrder
    book?: SortOrder
    chapter?: SortOrder
    verse?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}