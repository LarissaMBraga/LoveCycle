# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `Angular README`, you can find it at [`dataconnect-generated/angular/README.md`](./angular/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetCycle*](#getcycle)
  - [*ListMyCycles*](#listmycycles)
  - [*GetDailyLog*](#getdailylog)
  - [*ListMyLogs*](#listmylogs)
  - [*GetPrediction*](#getprediction)
  - [*ListMyPredictions*](#listmypredictions)
- [**Mutations**](#mutations)
  - [*CreateUserData*](#createuserdata)
  - [*UpdateUserProfile*](#updateuserprofile)
  - [*DeleteCycle*](#deletecycle)
  - [*CreateDailyLog*](#createdailylog)
  - [*UpdateDailyLog*](#updatedailylog)
  - [*DeleteDailyLog*](#deletedailylog)
  - [*InsertPrediction*](#insertprediction)
  - [*UpdatePrediction*](#updateprediction)
  - [*DeletePrediction*](#deleteprediction)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetCycle
You can execute the `GetCycle` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getCycle(vars: GetCycleVariables, options?: ExecuteQueryOptions): QueryPromise<GetCycleData, GetCycleVariables>;

interface GetCycleRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetCycleVariables): QueryRef<GetCycleData, GetCycleVariables>;
}
export const getCycleRef: GetCycleRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getCycle(dc: DataConnect, vars: GetCycleVariables, options?: ExecuteQueryOptions): QueryPromise<GetCycleData, GetCycleVariables>;

interface GetCycleRef {
  ...
  (dc: DataConnect, vars: GetCycleVariables): QueryRef<GetCycleData, GetCycleVariables>;
}
export const getCycleRef: GetCycleRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getCycleRef:
```typescript
const name = getCycleRef.operationName;
console.log(name);
```

### Variables
The `GetCycle` query requires an argument of type `GetCycleVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetCycleVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetCycle` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetCycleData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetCycleData {
  cycle?: {
    startDate: DateString;
    endDate?: DateString | null;
    predictedLength?: number | null;
  };
}
```
### Using `GetCycle`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getCycle, GetCycleVariables } from '@dataconnect/generated';

// The `GetCycle` query requires an argument of type `GetCycleVariables`:
const getCycleVars: GetCycleVariables = {
  id: ..., 
};

// Call the `getCycle()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getCycle(getCycleVars);
// Variables can be defined inline as well.
const { data } = await getCycle({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getCycle(dataConnect, getCycleVars);

console.log(data.cycle);

// Or, you can use the `Promise` API.
getCycle(getCycleVars).then((response) => {
  const data = response.data;
  console.log(data.cycle);
});
```

### Using `GetCycle`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getCycleRef, GetCycleVariables } from '@dataconnect/generated';

// The `GetCycle` query requires an argument of type `GetCycleVariables`:
const getCycleVars: GetCycleVariables = {
  id: ..., 
};

// Call the `getCycleRef()` function to get a reference to the query.
const ref = getCycleRef(getCycleVars);
// Variables can be defined inline as well.
const ref = getCycleRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getCycleRef(dataConnect, getCycleVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.cycle);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.cycle);
});
```

## ListMyCycles
You can execute the `ListMyCycles` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listMyCycles(options?: ExecuteQueryOptions): QueryPromise<ListMyCyclesData, undefined>;

interface ListMyCyclesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMyCyclesData, undefined>;
}
export const listMyCyclesRef: ListMyCyclesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listMyCycles(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListMyCyclesData, undefined>;

interface ListMyCyclesRef {
  ...
  (dc: DataConnect): QueryRef<ListMyCyclesData, undefined>;
}
export const listMyCyclesRef: ListMyCyclesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listMyCyclesRef:
```typescript
const name = listMyCyclesRef.operationName;
console.log(name);
```

### Variables
The `ListMyCycles` query has no variables.
### Return Type
Recall that executing the `ListMyCycles` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListMyCyclesData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListMyCyclesData {
  cycles: ({
    id: UUIDString;
    startDate: DateString;
    endDate?: DateString | null;
  } & Cycle_Key)[];
}
```
### Using `ListMyCycles`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listMyCycles } from '@dataconnect/generated';


// Call the `listMyCycles()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listMyCycles();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listMyCycles(dataConnect);

console.log(data.cycles);

// Or, you can use the `Promise` API.
listMyCycles().then((response) => {
  const data = response.data;
  console.log(data.cycles);
});
```

### Using `ListMyCycles`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listMyCyclesRef } from '@dataconnect/generated';


// Call the `listMyCyclesRef()` function to get a reference to the query.
const ref = listMyCyclesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listMyCyclesRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.cycles);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.cycles);
});
```

## GetDailyLog
You can execute the `GetDailyLog` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getDailyLog(vars: GetDailyLogVariables, options?: ExecuteQueryOptions): QueryPromise<GetDailyLogData, GetDailyLogVariables>;

interface GetDailyLogRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetDailyLogVariables): QueryRef<GetDailyLogData, GetDailyLogVariables>;
}
export const getDailyLogRef: GetDailyLogRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getDailyLog(dc: DataConnect, vars: GetDailyLogVariables, options?: ExecuteQueryOptions): QueryPromise<GetDailyLogData, GetDailyLogVariables>;

interface GetDailyLogRef {
  ...
  (dc: DataConnect, vars: GetDailyLogVariables): QueryRef<GetDailyLogData, GetDailyLogVariables>;
}
export const getDailyLogRef: GetDailyLogRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getDailyLogRef:
```typescript
const name = getDailyLogRef.operationName;
console.log(name);
```

### Variables
The `GetDailyLog` query requires an argument of type `GetDailyLogVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetDailyLogVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetDailyLog` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetDailyLogData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetDailyLogData {
  dailyLog?: {
    date: DateString;
    mood?: string | null;
    notes?: string | null;
  };
}
```
### Using `GetDailyLog`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getDailyLog, GetDailyLogVariables } from '@dataconnect/generated';

// The `GetDailyLog` query requires an argument of type `GetDailyLogVariables`:
const getDailyLogVars: GetDailyLogVariables = {
  id: ..., 
};

// Call the `getDailyLog()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getDailyLog(getDailyLogVars);
// Variables can be defined inline as well.
const { data } = await getDailyLog({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getDailyLog(dataConnect, getDailyLogVars);

console.log(data.dailyLog);

// Or, you can use the `Promise` API.
getDailyLog(getDailyLogVars).then((response) => {
  const data = response.data;
  console.log(data.dailyLog);
});
```

### Using `GetDailyLog`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getDailyLogRef, GetDailyLogVariables } from '@dataconnect/generated';

// The `GetDailyLog` query requires an argument of type `GetDailyLogVariables`:
const getDailyLogVars: GetDailyLogVariables = {
  id: ..., 
};

// Call the `getDailyLogRef()` function to get a reference to the query.
const ref = getDailyLogRef(getDailyLogVars);
// Variables can be defined inline as well.
const ref = getDailyLogRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getDailyLogRef(dataConnect, getDailyLogVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.dailyLog);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.dailyLog);
});
```

## ListMyLogs
You can execute the `ListMyLogs` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listMyLogs(options?: ExecuteQueryOptions): QueryPromise<ListMyLogsData, undefined>;

interface ListMyLogsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMyLogsData, undefined>;
}
export const listMyLogsRef: ListMyLogsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listMyLogs(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListMyLogsData, undefined>;

interface ListMyLogsRef {
  ...
  (dc: DataConnect): QueryRef<ListMyLogsData, undefined>;
}
export const listMyLogsRef: ListMyLogsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listMyLogsRef:
```typescript
const name = listMyLogsRef.operationName;
console.log(name);
```

### Variables
The `ListMyLogs` query has no variables.
### Return Type
Recall that executing the `ListMyLogs` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListMyLogsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListMyLogsData {
  dailyLogs: ({
    id: UUIDString;
    date: DateString;
    mood?: string | null;
  } & DailyLog_Key)[];
}
```
### Using `ListMyLogs`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listMyLogs } from '@dataconnect/generated';


// Call the `listMyLogs()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listMyLogs();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listMyLogs(dataConnect);

console.log(data.dailyLogs);

// Or, you can use the `Promise` API.
listMyLogs().then((response) => {
  const data = response.data;
  console.log(data.dailyLogs);
});
```

### Using `ListMyLogs`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listMyLogsRef } from '@dataconnect/generated';


// Call the `listMyLogsRef()` function to get a reference to the query.
const ref = listMyLogsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listMyLogsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.dailyLogs);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.dailyLogs);
});
```

## GetPrediction
You can execute the `GetPrediction` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getPrediction(vars: GetPredictionVariables, options?: ExecuteQueryOptions): QueryPromise<GetPredictionData, GetPredictionVariables>;

interface GetPredictionRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetPredictionVariables): QueryRef<GetPredictionData, GetPredictionVariables>;
}
export const getPredictionRef: GetPredictionRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getPrediction(dc: DataConnect, vars: GetPredictionVariables, options?: ExecuteQueryOptions): QueryPromise<GetPredictionData, GetPredictionVariables>;

interface GetPredictionRef {
  ...
  (dc: DataConnect, vars: GetPredictionVariables): QueryRef<GetPredictionData, GetPredictionVariables>;
}
export const getPredictionRef: GetPredictionRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getPredictionRef:
```typescript
const name = getPredictionRef.operationName;
console.log(name);
```

### Variables
The `GetPrediction` query requires an argument of type `GetPredictionVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetPredictionVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetPrediction` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetPredictionData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetPredictionData {
  prediction?: {
    type: string;
    date?: DateString | null;
    confidenceScore?: number | null;
  };
}
```
### Using `GetPrediction`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getPrediction, GetPredictionVariables } from '@dataconnect/generated';

// The `GetPrediction` query requires an argument of type `GetPredictionVariables`:
const getPredictionVars: GetPredictionVariables = {
  id: ..., 
};

// Call the `getPrediction()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getPrediction(getPredictionVars);
// Variables can be defined inline as well.
const { data } = await getPrediction({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getPrediction(dataConnect, getPredictionVars);

console.log(data.prediction);

// Or, you can use the `Promise` API.
getPrediction(getPredictionVars).then((response) => {
  const data = response.data;
  console.log(data.prediction);
});
```

### Using `GetPrediction`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getPredictionRef, GetPredictionVariables } from '@dataconnect/generated';

// The `GetPrediction` query requires an argument of type `GetPredictionVariables`:
const getPredictionVars: GetPredictionVariables = {
  id: ..., 
};

// Call the `getPredictionRef()` function to get a reference to the query.
const ref = getPredictionRef(getPredictionVars);
// Variables can be defined inline as well.
const ref = getPredictionRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getPredictionRef(dataConnect, getPredictionVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.prediction);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.prediction);
});
```

## ListMyPredictions
You can execute the `ListMyPredictions` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listMyPredictions(options?: ExecuteQueryOptions): QueryPromise<ListMyPredictionsData, undefined>;

interface ListMyPredictionsRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMyPredictionsData, undefined>;
}
export const listMyPredictionsRef: ListMyPredictionsRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listMyPredictions(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListMyPredictionsData, undefined>;

interface ListMyPredictionsRef {
  ...
  (dc: DataConnect): QueryRef<ListMyPredictionsData, undefined>;
}
export const listMyPredictionsRef: ListMyPredictionsRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listMyPredictionsRef:
```typescript
const name = listMyPredictionsRef.operationName;
console.log(name);
```

### Variables
The `ListMyPredictions` query has no variables.
### Return Type
Recall that executing the `ListMyPredictions` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListMyPredictionsData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListMyPredictionsData {
  predictions: ({
    id: UUIDString;
    type: string;
    date?: DateString | null;
  } & Prediction_Key)[];
}
```
### Using `ListMyPredictions`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listMyPredictions } from '@dataconnect/generated';


// Call the `listMyPredictions()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listMyPredictions();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listMyPredictions(dataConnect);

console.log(data.predictions);

// Or, you can use the `Promise` API.
listMyPredictions().then((response) => {
  const data = response.data;
  console.log(data.predictions);
});
```

### Using `ListMyPredictions`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listMyPredictionsRef } from '@dataconnect/generated';


// Call the `listMyPredictionsRef()` function to get a reference to the query.
const ref = listMyPredictionsRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listMyPredictionsRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.predictions);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.predictions);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateUserData
You can execute the `CreateUserData` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createUserData(): MutationPromise<CreateUserDataData, undefined>;

interface CreateUserDataRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateUserDataData, undefined>;
}
export const createUserDataRef: CreateUserDataRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createUserData(dc: DataConnect): MutationPromise<CreateUserDataData, undefined>;

interface CreateUserDataRef {
  ...
  (dc: DataConnect): MutationRef<CreateUserDataData, undefined>;
}
export const createUserDataRef: CreateUserDataRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createUserDataRef:
```typescript
const name = createUserDataRef.operationName;
console.log(name);
```

### Variables
The `CreateUserData` mutation has no variables.
### Return Type
Recall that executing the `CreateUserData` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateUserDataData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateUserDataData {
  user_insert: User_Key;
}
```
### Using `CreateUserData`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createUserData } from '@dataconnect/generated';


// Call the `createUserData()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createUserData();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createUserData(dataConnect);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
createUserData().then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

### Using `CreateUserData`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createUserDataRef } from '@dataconnect/generated';


// Call the `createUserDataRef()` function to get a reference to the mutation.
const ref = createUserDataRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createUserDataRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.user_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.user_insert);
});
```

## UpdateUserProfile
You can execute the `UpdateUserProfile` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateUserProfile(): MutationPromise<UpdateUserProfileData, undefined>;

interface UpdateUserProfileRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<UpdateUserProfileData, undefined>;
}
export const updateUserProfileRef: UpdateUserProfileRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateUserProfile(dc: DataConnect): MutationPromise<UpdateUserProfileData, undefined>;

interface UpdateUserProfileRef {
  ...
  (dc: DataConnect): MutationRef<UpdateUserProfileData, undefined>;
}
export const updateUserProfileRef: UpdateUserProfileRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateUserProfileRef:
```typescript
const name = updateUserProfileRef.operationName;
console.log(name);
```

### Variables
The `UpdateUserProfile` mutation has no variables.
### Return Type
Recall that executing the `UpdateUserProfile` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateUserProfileData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateUserProfileData {
  userProfile_update?: UserProfile_Key | null;
}
```
### Using `UpdateUserProfile`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateUserProfile } from '@dataconnect/generated';


// Call the `updateUserProfile()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateUserProfile();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateUserProfile(dataConnect);

console.log(data.userProfile_update);

// Or, you can use the `Promise` API.
updateUserProfile().then((response) => {
  const data = response.data;
  console.log(data.userProfile_update);
});
```

### Using `UpdateUserProfile`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateUserProfileRef } from '@dataconnect/generated';


// Call the `updateUserProfileRef()` function to get a reference to the mutation.
const ref = updateUserProfileRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateUserProfileRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.userProfile_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.userProfile_update);
});
```

## DeleteCycle
You can execute the `DeleteCycle` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteCycle(vars: DeleteCycleVariables): MutationPromise<DeleteCycleData, DeleteCycleVariables>;

interface DeleteCycleRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteCycleVariables): MutationRef<DeleteCycleData, DeleteCycleVariables>;
}
export const deleteCycleRef: DeleteCycleRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteCycle(dc: DataConnect, vars: DeleteCycleVariables): MutationPromise<DeleteCycleData, DeleteCycleVariables>;

interface DeleteCycleRef {
  ...
  (dc: DataConnect, vars: DeleteCycleVariables): MutationRef<DeleteCycleData, DeleteCycleVariables>;
}
export const deleteCycleRef: DeleteCycleRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteCycleRef:
```typescript
const name = deleteCycleRef.operationName;
console.log(name);
```

### Variables
The `DeleteCycle` mutation requires an argument of type `DeleteCycleVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteCycleVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteCycle` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteCycleData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteCycleData {
  cycle_delete?: Cycle_Key | null;
}
```
### Using `DeleteCycle`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteCycle, DeleteCycleVariables } from '@dataconnect/generated';

// The `DeleteCycle` mutation requires an argument of type `DeleteCycleVariables`:
const deleteCycleVars: DeleteCycleVariables = {
  id: ..., 
};

// Call the `deleteCycle()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteCycle(deleteCycleVars);
// Variables can be defined inline as well.
const { data } = await deleteCycle({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteCycle(dataConnect, deleteCycleVars);

console.log(data.cycle_delete);

// Or, you can use the `Promise` API.
deleteCycle(deleteCycleVars).then((response) => {
  const data = response.data;
  console.log(data.cycle_delete);
});
```

### Using `DeleteCycle`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteCycleRef, DeleteCycleVariables } from '@dataconnect/generated';

// The `DeleteCycle` mutation requires an argument of type `DeleteCycleVariables`:
const deleteCycleVars: DeleteCycleVariables = {
  id: ..., 
};

// Call the `deleteCycleRef()` function to get a reference to the mutation.
const ref = deleteCycleRef(deleteCycleVars);
// Variables can be defined inline as well.
const ref = deleteCycleRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteCycleRef(dataConnect, deleteCycleVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.cycle_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.cycle_delete);
});
```

## CreateDailyLog
You can execute the `CreateDailyLog` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createDailyLog(vars: CreateDailyLogVariables): MutationPromise<CreateDailyLogData, CreateDailyLogVariables>;

interface CreateDailyLogRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateDailyLogVariables): MutationRef<CreateDailyLogData, CreateDailyLogVariables>;
}
export const createDailyLogRef: CreateDailyLogRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createDailyLog(dc: DataConnect, vars: CreateDailyLogVariables): MutationPromise<CreateDailyLogData, CreateDailyLogVariables>;

interface CreateDailyLogRef {
  ...
  (dc: DataConnect, vars: CreateDailyLogVariables): MutationRef<CreateDailyLogData, CreateDailyLogVariables>;
}
export const createDailyLogRef: CreateDailyLogRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createDailyLogRef:
```typescript
const name = createDailyLogRef.operationName;
console.log(name);
```

### Variables
The `CreateDailyLog` mutation requires an argument of type `CreateDailyLogVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateDailyLogVariables {
  date: DateString;
  mood?: string | null;
}
```
### Return Type
Recall that executing the `CreateDailyLog` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateDailyLogData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateDailyLogData {
  dailyLog_insert: DailyLog_Key;
}
```
### Using `CreateDailyLog`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createDailyLog, CreateDailyLogVariables } from '@dataconnect/generated';

// The `CreateDailyLog` mutation requires an argument of type `CreateDailyLogVariables`:
const createDailyLogVars: CreateDailyLogVariables = {
  date: ..., 
  mood: ..., // optional
};

// Call the `createDailyLog()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createDailyLog(createDailyLogVars);
// Variables can be defined inline as well.
const { data } = await createDailyLog({ date: ..., mood: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createDailyLog(dataConnect, createDailyLogVars);

console.log(data.dailyLog_insert);

// Or, you can use the `Promise` API.
createDailyLog(createDailyLogVars).then((response) => {
  const data = response.data;
  console.log(data.dailyLog_insert);
});
```

### Using `CreateDailyLog`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createDailyLogRef, CreateDailyLogVariables } from '@dataconnect/generated';

// The `CreateDailyLog` mutation requires an argument of type `CreateDailyLogVariables`:
const createDailyLogVars: CreateDailyLogVariables = {
  date: ..., 
  mood: ..., // optional
};

// Call the `createDailyLogRef()` function to get a reference to the mutation.
const ref = createDailyLogRef(createDailyLogVars);
// Variables can be defined inline as well.
const ref = createDailyLogRef({ date: ..., mood: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createDailyLogRef(dataConnect, createDailyLogVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.dailyLog_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.dailyLog_insert);
});
```

## UpdateDailyLog
You can execute the `UpdateDailyLog` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateDailyLog(vars: UpdateDailyLogVariables): MutationPromise<UpdateDailyLogData, UpdateDailyLogVariables>;

interface UpdateDailyLogRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateDailyLogVariables): MutationRef<UpdateDailyLogData, UpdateDailyLogVariables>;
}
export const updateDailyLogRef: UpdateDailyLogRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateDailyLog(dc: DataConnect, vars: UpdateDailyLogVariables): MutationPromise<UpdateDailyLogData, UpdateDailyLogVariables>;

interface UpdateDailyLogRef {
  ...
  (dc: DataConnect, vars: UpdateDailyLogVariables): MutationRef<UpdateDailyLogData, UpdateDailyLogVariables>;
}
export const updateDailyLogRef: UpdateDailyLogRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateDailyLogRef:
```typescript
const name = updateDailyLogRef.operationName;
console.log(name);
```

### Variables
The `UpdateDailyLog` mutation requires an argument of type `UpdateDailyLogVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateDailyLogVariables {
  id: UUIDString;
  notes?: string | null;
}
```
### Return Type
Recall that executing the `UpdateDailyLog` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateDailyLogData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateDailyLogData {
  dailyLog_update?: DailyLog_Key | null;
}
```
### Using `UpdateDailyLog`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateDailyLog, UpdateDailyLogVariables } from '@dataconnect/generated';

// The `UpdateDailyLog` mutation requires an argument of type `UpdateDailyLogVariables`:
const updateDailyLogVars: UpdateDailyLogVariables = {
  id: ..., 
  notes: ..., // optional
};

// Call the `updateDailyLog()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateDailyLog(updateDailyLogVars);
// Variables can be defined inline as well.
const { data } = await updateDailyLog({ id: ..., notes: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateDailyLog(dataConnect, updateDailyLogVars);

console.log(data.dailyLog_update);

// Or, you can use the `Promise` API.
updateDailyLog(updateDailyLogVars).then((response) => {
  const data = response.data;
  console.log(data.dailyLog_update);
});
```

### Using `UpdateDailyLog`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateDailyLogRef, UpdateDailyLogVariables } from '@dataconnect/generated';

// The `UpdateDailyLog` mutation requires an argument of type `UpdateDailyLogVariables`:
const updateDailyLogVars: UpdateDailyLogVariables = {
  id: ..., 
  notes: ..., // optional
};

// Call the `updateDailyLogRef()` function to get a reference to the mutation.
const ref = updateDailyLogRef(updateDailyLogVars);
// Variables can be defined inline as well.
const ref = updateDailyLogRef({ id: ..., notes: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateDailyLogRef(dataConnect, updateDailyLogVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.dailyLog_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.dailyLog_update);
});
```

## DeleteDailyLog
You can execute the `DeleteDailyLog` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deleteDailyLog(vars: DeleteDailyLogVariables): MutationPromise<DeleteDailyLogData, DeleteDailyLogVariables>;

interface DeleteDailyLogRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteDailyLogVariables): MutationRef<DeleteDailyLogData, DeleteDailyLogVariables>;
}
export const deleteDailyLogRef: DeleteDailyLogRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deleteDailyLog(dc: DataConnect, vars: DeleteDailyLogVariables): MutationPromise<DeleteDailyLogData, DeleteDailyLogVariables>;

interface DeleteDailyLogRef {
  ...
  (dc: DataConnect, vars: DeleteDailyLogVariables): MutationRef<DeleteDailyLogData, DeleteDailyLogVariables>;
}
export const deleteDailyLogRef: DeleteDailyLogRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deleteDailyLogRef:
```typescript
const name = deleteDailyLogRef.operationName;
console.log(name);
```

### Variables
The `DeleteDailyLog` mutation requires an argument of type `DeleteDailyLogVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeleteDailyLogVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeleteDailyLog` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeleteDailyLogData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeleteDailyLogData {
  dailyLog_delete?: DailyLog_Key | null;
}
```
### Using `DeleteDailyLog`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deleteDailyLog, DeleteDailyLogVariables } from '@dataconnect/generated';

// The `DeleteDailyLog` mutation requires an argument of type `DeleteDailyLogVariables`:
const deleteDailyLogVars: DeleteDailyLogVariables = {
  id: ..., 
};

// Call the `deleteDailyLog()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deleteDailyLog(deleteDailyLogVars);
// Variables can be defined inline as well.
const { data } = await deleteDailyLog({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deleteDailyLog(dataConnect, deleteDailyLogVars);

console.log(data.dailyLog_delete);

// Or, you can use the `Promise` API.
deleteDailyLog(deleteDailyLogVars).then((response) => {
  const data = response.data;
  console.log(data.dailyLog_delete);
});
```

### Using `DeleteDailyLog`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deleteDailyLogRef, DeleteDailyLogVariables } from '@dataconnect/generated';

// The `DeleteDailyLog` mutation requires an argument of type `DeleteDailyLogVariables`:
const deleteDailyLogVars: DeleteDailyLogVariables = {
  id: ..., 
};

// Call the `deleteDailyLogRef()` function to get a reference to the mutation.
const ref = deleteDailyLogRef(deleteDailyLogVars);
// Variables can be defined inline as well.
const ref = deleteDailyLogRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deleteDailyLogRef(dataConnect, deleteDailyLogVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.dailyLog_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.dailyLog_delete);
});
```

## InsertPrediction
You can execute the `InsertPrediction` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
insertPrediction(vars: InsertPredictionVariables): MutationPromise<InsertPredictionData, InsertPredictionVariables>;

interface InsertPredictionRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: InsertPredictionVariables): MutationRef<InsertPredictionData, InsertPredictionVariables>;
}
export const insertPredictionRef: InsertPredictionRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
insertPrediction(dc: DataConnect, vars: InsertPredictionVariables): MutationPromise<InsertPredictionData, InsertPredictionVariables>;

interface InsertPredictionRef {
  ...
  (dc: DataConnect, vars: InsertPredictionVariables): MutationRef<InsertPredictionData, InsertPredictionVariables>;
}
export const insertPredictionRef: InsertPredictionRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the insertPredictionRef:
```typescript
const name = insertPredictionRef.operationName;
console.log(name);
```

### Variables
The `InsertPrediction` mutation requires an argument of type `InsertPredictionVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface InsertPredictionVariables {
  type: string;
  date?: DateString | null;
}
```
### Return Type
Recall that executing the `InsertPrediction` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `InsertPredictionData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface InsertPredictionData {
  prediction_insert: Prediction_Key;
}
```
### Using `InsertPrediction`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, insertPrediction, InsertPredictionVariables } from '@dataconnect/generated';

// The `InsertPrediction` mutation requires an argument of type `InsertPredictionVariables`:
const insertPredictionVars: InsertPredictionVariables = {
  type: ..., 
  date: ..., // optional
};

// Call the `insertPrediction()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await insertPrediction(insertPredictionVars);
// Variables can be defined inline as well.
const { data } = await insertPrediction({ type: ..., date: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await insertPrediction(dataConnect, insertPredictionVars);

console.log(data.prediction_insert);

// Or, you can use the `Promise` API.
insertPrediction(insertPredictionVars).then((response) => {
  const data = response.data;
  console.log(data.prediction_insert);
});
```

### Using `InsertPrediction`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, insertPredictionRef, InsertPredictionVariables } from '@dataconnect/generated';

// The `InsertPrediction` mutation requires an argument of type `InsertPredictionVariables`:
const insertPredictionVars: InsertPredictionVariables = {
  type: ..., 
  date: ..., // optional
};

// Call the `insertPredictionRef()` function to get a reference to the mutation.
const ref = insertPredictionRef(insertPredictionVars);
// Variables can be defined inline as well.
const ref = insertPredictionRef({ type: ..., date: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = insertPredictionRef(dataConnect, insertPredictionVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.prediction_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.prediction_insert);
});
```

## UpdatePrediction
You can execute the `UpdatePrediction` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updatePrediction(vars: UpdatePredictionVariables): MutationPromise<UpdatePredictionData, UpdatePredictionVariables>;

interface UpdatePredictionRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdatePredictionVariables): MutationRef<UpdatePredictionData, UpdatePredictionVariables>;
}
export const updatePredictionRef: UpdatePredictionRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updatePrediction(dc: DataConnect, vars: UpdatePredictionVariables): MutationPromise<UpdatePredictionData, UpdatePredictionVariables>;

interface UpdatePredictionRef {
  ...
  (dc: DataConnect, vars: UpdatePredictionVariables): MutationRef<UpdatePredictionData, UpdatePredictionVariables>;
}
export const updatePredictionRef: UpdatePredictionRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updatePredictionRef:
```typescript
const name = updatePredictionRef.operationName;
console.log(name);
```

### Variables
The `UpdatePrediction` mutation requires an argument of type `UpdatePredictionVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdatePredictionVariables {
  id: UUIDString;
  confidence?: number | null;
}
```
### Return Type
Recall that executing the `UpdatePrediction` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdatePredictionData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdatePredictionData {
  prediction_update?: Prediction_Key | null;
}
```
### Using `UpdatePrediction`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updatePrediction, UpdatePredictionVariables } from '@dataconnect/generated';

// The `UpdatePrediction` mutation requires an argument of type `UpdatePredictionVariables`:
const updatePredictionVars: UpdatePredictionVariables = {
  id: ..., 
  confidence: ..., // optional
};

// Call the `updatePrediction()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updatePrediction(updatePredictionVars);
// Variables can be defined inline as well.
const { data } = await updatePrediction({ id: ..., confidence: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updatePrediction(dataConnect, updatePredictionVars);

console.log(data.prediction_update);

// Or, you can use the `Promise` API.
updatePrediction(updatePredictionVars).then((response) => {
  const data = response.data;
  console.log(data.prediction_update);
});
```

### Using `UpdatePrediction`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updatePredictionRef, UpdatePredictionVariables } from '@dataconnect/generated';

// The `UpdatePrediction` mutation requires an argument of type `UpdatePredictionVariables`:
const updatePredictionVars: UpdatePredictionVariables = {
  id: ..., 
  confidence: ..., // optional
};

// Call the `updatePredictionRef()` function to get a reference to the mutation.
const ref = updatePredictionRef(updatePredictionVars);
// Variables can be defined inline as well.
const ref = updatePredictionRef({ id: ..., confidence: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updatePredictionRef(dataConnect, updatePredictionVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.prediction_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.prediction_update);
});
```

## DeletePrediction
You can execute the `DeletePrediction` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
deletePrediction(vars: DeletePredictionVariables): MutationPromise<DeletePredictionData, DeletePredictionVariables>;

interface DeletePredictionRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeletePredictionVariables): MutationRef<DeletePredictionData, DeletePredictionVariables>;
}
export const deletePredictionRef: DeletePredictionRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
deletePrediction(dc: DataConnect, vars: DeletePredictionVariables): MutationPromise<DeletePredictionData, DeletePredictionVariables>;

interface DeletePredictionRef {
  ...
  (dc: DataConnect, vars: DeletePredictionVariables): MutationRef<DeletePredictionData, DeletePredictionVariables>;
}
export const deletePredictionRef: DeletePredictionRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the deletePredictionRef:
```typescript
const name = deletePredictionRef.operationName;
console.log(name);
```

### Variables
The `DeletePrediction` mutation requires an argument of type `DeletePredictionVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface DeletePredictionVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `DeletePrediction` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `DeletePredictionData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface DeletePredictionData {
  prediction_delete?: Prediction_Key | null;
}
```
### Using `DeletePrediction`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, deletePrediction, DeletePredictionVariables } from '@dataconnect/generated';

// The `DeletePrediction` mutation requires an argument of type `DeletePredictionVariables`:
const deletePredictionVars: DeletePredictionVariables = {
  id: ..., 
};

// Call the `deletePrediction()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await deletePrediction(deletePredictionVars);
// Variables can be defined inline as well.
const { data } = await deletePrediction({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await deletePrediction(dataConnect, deletePredictionVars);

console.log(data.prediction_delete);

// Or, you can use the `Promise` API.
deletePrediction(deletePredictionVars).then((response) => {
  const data = response.data;
  console.log(data.prediction_delete);
});
```

### Using `DeletePrediction`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, deletePredictionRef, DeletePredictionVariables } from '@dataconnect/generated';

// The `DeletePrediction` mutation requires an argument of type `DeletePredictionVariables`:
const deletePredictionVars: DeletePredictionVariables = {
  id: ..., 
};

// Call the `deletePredictionRef()` function to get a reference to the mutation.
const ref = deletePredictionRef(deletePredictionVars);
// Variables can be defined inline as well.
const ref = deletePredictionRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = deletePredictionRef(dataConnect, deletePredictionVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.prediction_delete);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.prediction_delete);
});
```

