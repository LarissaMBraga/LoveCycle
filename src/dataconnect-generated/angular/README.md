# Generated Angular README
This README will guide you through the process of using the generated Angular SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `JavaScript README`, you can find it at [`dataconnect-generated/README.md`](../README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

You can use this generated SDK by importing from the package `@dataconnect/generated/angular` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#angular).

# Table of Contents
- [**Overview**](#generated-angular-readme)
- [**TanStack Query Firebase & TanStack Angular Query**](#tanstack-query-firebase-tanstack-angular-query)
  - [*Package Installation*](#installing-tanstack-query-firebase-and-tanstack-angular-query-packages)
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

# TanStack Query Firebase & TanStack Angular Query
This SDK provides [Angular](https://angular.dev/) injectors generated specific to your application, for the operations found in the connector `example`. These injectors are generated using [TanStack Query Firebase](https://react-query-firebase.invertase.dev/) by our partners at Invertase, a library built on top of [TanStack Angular Query v5](https://tanstack.com/query/v5/docs/framework/angular/overview) and [AngularFire](https://github.com/angular/angularfire/tree/main).

***You do not need to be familiar with Tanstack Query or Tanstack Query Firebase to use this SDK.*** However, you may find it useful to learn more about them, as they will empower you as a user of this Generated Angular SDK.

## Installing TanStack Query Firebase and TanStack Angular Query Packages
In order to use the Angular generated SDK, you must install `AngularFire` and select `Data Connect` during the setup.

You can install `AngularFire` using the [Angular CLI](https://angular.dev/installation#install-angular-cli). You can also follow the installation instructions from the [TanStack Query Firebase documentation](https://react-query-firebase.invertase.dev/angular#automatic-setup).

```bash
npm install -g @angular/cli
```
```bash
ng add @angular/fire
# select Data Connect during setup!
```

This should handle configuring your project to use TanStack Query. However, if you need to set up manually, please follow the [TanStack Query Firebase documentation](https://invertase.docs.page/tanstack-query-firebase/angular#usage).

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`.

You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

```javascript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, edit your `main.ts` file and your `app/app.config.ts` file and update your `provideDataConnect` provider:
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#emulator-react-angular).

```javascript
... // other imports
// update your imports to include the function that connects to the emulator
import { getDataConnect, provideDataConnect, connectDataConnectEmulator } from '@angular/fire/data-connect';

// update the `provideDataConnect` provider to provide an instance of `DataConnect` which uses the emulator:
export const appConfig: ApplicationConfig = {
  providers: [
    ... // other providers
    // Firebase Data Connect providers
    ...
    provideDataConnect(() => {
      const dataConnect = getDataConnect(connectorConfig);
      connectDataConnectEmulator(dataConnect, 'localhost', 9399);
      return dataConnect;
    }),
  ],
};
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) using the injectors provided from your generated Angular SDK.

# Queries

The Angular generated SDK provides Query injectors that call [`injectDataConnectQuery`](https://react-query-firebase.invertase.dev/angular/data-connect/querying) from TanStack Query Firebase.

Calling these injectors will return a `CreateDataConnectQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and the most recent data returned by the Query, among other things. To learn more about these injectors and how to use them, see the [TanStack Query Firebase documentation](https://react-query-firebase.invertase.dev/angular/data-connect/querying).

TanStack Angular Query caches the results of your Queries, so using the same Query injector in multiple places in your application allows the entire application to automatically see updates to that Query's data.

Query injectors execute their Queries automatically when called, and periodically refresh, unless you change the `queryOptions` for the Query. To learn how to stop a Query from automatically executing, including how to make a query "lazy", see the [TanStack Angular Query documentation](https://tanstack.com/query/latest/docs/framework/angular/guides/disabling-queries).

To learn more about TanStack Angular Query's Queries, see the [TanStack Angular Query documentation](https://tanstack.com/query/v5/docs/framework/angular/guides/queries).

## Using Query Injectors
Here's a general overview of how to use the generated Query injectors in your code:

- If the Query has no variables, the Query injector does not require arguments.
- If the Query has any required variables, the Query injector will require at least one argument: an object that contains all the required variables for the Query.
- If the Query has some required and some optional variables, only required variables are necessary in the variables argument object, and optional variables may be provided as well.
- If all of the Query's variables are optional, the Query injector does not require any arguments.
- The Angular generated SDK's Query injectors do not accept `DataConnect` instances as arguments.
- Query injector functions can be called with or without passing in an `options` argument, whose type is a function which returns an object. The type is generated alongside the operation's injector function in [dataconnect-generated/angular/index.d.ts](./index.d.ts). To learn more about the `options` argument, see the [TanStack Angular Query documentation](https://tanstack.com/query/v5/docs/framework/angular/guides/query-options).
  - ***Special case:***  If the Query has all optional variables and you would like to provide an `options` argument to the Query injector without providing any variables, you must pass `undefined` where you would normally pass the Query's variables, and then may provide the `options` argument.

Below are examples of how to use the `example` connector's generated Query injectors to execute each Query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#operations-react-angular).

## GetCycle
You can execute the `GetCycle` Query using the following Query injector, which is defined in [dataconnect-generated/angular/index.d.ts](./index.d.ts):

```javascript
injectGetCycle(args: GetCycleArgs, options?: GetCycleOptions, injector?: Injector): CreateDataConnectQueryResult<GetCycleData, GetCycleVariables>;
```

### Variables
The `GetCycle` Query requires an argument of type `GetCycleVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetCycleVariables {
  id: UUIDString;
}
```
### Return Type
Recall that calling the `GetCycle` Query injector returns a `CreateDataConnectQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `CreateDataConnectQueryResult.status()` function. You can also check for pending / success / error status using the `CreateDataConnectQueryResult.isPending()`, `CreateDataConnectQueryResult.isSuccess()`, and `CreateDataConnectQueryResult.isError()` functions.

To access the data returned by a Query, use the `CreateDataConnectQueryResult.data()` function. The data for the `GetCycle` Query is of type `GetCycleData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface GetCycleData {
  cycle?: {
    startDate: DateString;
    endDate?: DateString | null;
    predictedLength?: number | null;
  };
}
```

To learn more about the `CreateDataConnectQueryResult` object, see the [TanStack Query Firebase documentation](https://docs.page/invertase/tanstack-query-firebase/angular/data-connect/functions/injectDataConnectQuery) and the [TanStack Angular Query documentation](https://tanstack.com/query/v5/docs/framework/angular/reference/functions/injectquery).

### Using `GetCycle`'s Query injector

```javascript
... // other imports
import { connectorConfig, GetCycleVariables } from '@dataconnect/generated';
import { injectGetCycle, GetCycleOptions } from '@dataconnect/generated/angular'
import { DataConnect } from '@angular/fire/data-connect';
import { initializeApp } from '@angular/fire/app';

@Component({
  ... // other component fields
  template: `
    <!-- You can render your component dynamically based on the status of the Query. -->
    @if (query.isPending()) {
      Loading...
    }
    @if (query.error()) {
      An error has occurred: {{ query.error() }}
    }
    <!-- If the Query is successful, you can access the data returned using
      the CreateDataConnectQueryResult.data() function. -->
    @if (query.data(); as data) {
      <!-- use your data to display something -->
            <div>Query successful!</div>
    }
  `,
})
export class MyComponent {
  // The `GetCycle` Query requires an argument of type `GetCycleVariables`:
  getCycleVars: GetCycleVariables = {
    id: ..., 
  };

  // Since the execution of the query is eager, you don't have to call `execute` to "execute" the Query.
  // Call the Query injector function to get a `CreateDataConnectQueryResult` object which holds the state of your Query.
  query = injectGetCycle(this.getCycleVars);
  // Variables can be defined inline as well.
  query = injectGetCycle({ id: ..., });

  // You can also pass in an options function (not object) of type `GetCycleOptions` to the Query injector function.
  options: GetCycleOptions = () => {
    return {
      staleTime: 5 * 1000
    };
  };
  query = injectGetCycle(this.getCycleVars, this.options);
}
```

## ListMyCycles
You can execute the `ListMyCycles` Query using the following Query injector, which is defined in [dataconnect-generated/angular/index.d.ts](./index.d.ts):

```javascript
injectListMyCycles(options?: ListMyCyclesOptions, injector?: Injector): CreateDataConnectQueryResult<ListMyCyclesData, undefined>;
```

### Variables
The `ListMyCycles` Query has no variables.
### Return Type
Recall that calling the `ListMyCycles` Query injector returns a `CreateDataConnectQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `CreateDataConnectQueryResult.status()` function. You can also check for pending / success / error status using the `CreateDataConnectQueryResult.isPending()`, `CreateDataConnectQueryResult.isSuccess()`, and `CreateDataConnectQueryResult.isError()` functions.

To access the data returned by a Query, use the `CreateDataConnectQueryResult.data()` function. The data for the `ListMyCycles` Query is of type `ListMyCyclesData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface ListMyCyclesData {
  cycles: ({
    id: UUIDString;
    startDate: DateString;
    endDate?: DateString | null;
  } & Cycle_Key)[];
}
```

To learn more about the `CreateDataConnectQueryResult` object, see the [TanStack Query Firebase documentation](https://docs.page/invertase/tanstack-query-firebase/angular/data-connect/functions/injectDataConnectQuery) and the [TanStack Angular Query documentation](https://tanstack.com/query/v5/docs/framework/angular/reference/functions/injectquery).

### Using `ListMyCycles`'s Query injector

```javascript
... // other imports
import { connectorConfig } from '@dataconnect/generated';
import { injectListMyCycles, ListMyCyclesOptions } from '@dataconnect/generated/angular'
import { DataConnect } from '@angular/fire/data-connect';
import { initializeApp } from '@angular/fire/app';

@Component({
  ... // other component fields
  template: `
    <!-- You can render your component dynamically based on the status of the Query. -->
    @if (query.isPending()) {
      Loading...
    }
    @if (query.error()) {
      An error has occurred: {{ query.error() }}
    }
    <!-- If the Query is successful, you can access the data returned using
      the CreateDataConnectQueryResult.data() function. -->
    @if (query.data(); as data) {
      <!-- use your data to display something -->
            <div>Query successful!</div>
    }
  `,
})
export class MyComponent {
  // Since the execution of the query is eager, you don't have to call `execute` to "execute" the Query.
  // Call the Query injector function to get a `CreateDataConnectQueryResult` object which holds the state of your Query.
  query = injectListMyCycles();

  // You can also pass in an options function (not object) of type `ListMyCyclesOptions` to the Query injector function.
  options: ListMyCyclesOptions = () => {
    return {
      staleTime: 5 * 1000
    };
  };
  query = injectListMyCycles(this.options);
}
```

## GetDailyLog
You can execute the `GetDailyLog` Query using the following Query injector, which is defined in [dataconnect-generated/angular/index.d.ts](./index.d.ts):

```javascript
injectGetDailyLog(args: GetDailyLogArgs, options?: GetDailyLogOptions, injector?: Injector): CreateDataConnectQueryResult<GetDailyLogData, GetDailyLogVariables>;
```

### Variables
The `GetDailyLog` Query requires an argument of type `GetDailyLogVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetDailyLogVariables {
  id: UUIDString;
}
```
### Return Type
Recall that calling the `GetDailyLog` Query injector returns a `CreateDataConnectQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `CreateDataConnectQueryResult.status()` function. You can also check for pending / success / error status using the `CreateDataConnectQueryResult.isPending()`, `CreateDataConnectQueryResult.isSuccess()`, and `CreateDataConnectQueryResult.isError()` functions.

To access the data returned by a Query, use the `CreateDataConnectQueryResult.data()` function. The data for the `GetDailyLog` Query is of type `GetDailyLogData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface GetDailyLogData {
  dailyLog?: {
    date: DateString;
    mood?: string | null;
    notes?: string | null;
  };
}
```

To learn more about the `CreateDataConnectQueryResult` object, see the [TanStack Query Firebase documentation](https://docs.page/invertase/tanstack-query-firebase/angular/data-connect/functions/injectDataConnectQuery) and the [TanStack Angular Query documentation](https://tanstack.com/query/v5/docs/framework/angular/reference/functions/injectquery).

### Using `GetDailyLog`'s Query injector

```javascript
... // other imports
import { connectorConfig, GetDailyLogVariables } from '@dataconnect/generated';
import { injectGetDailyLog, GetDailyLogOptions } from '@dataconnect/generated/angular'
import { DataConnect } from '@angular/fire/data-connect';
import { initializeApp } from '@angular/fire/app';

@Component({
  ... // other component fields
  template: `
    <!-- You can render your component dynamically based on the status of the Query. -->
    @if (query.isPending()) {
      Loading...
    }
    @if (query.error()) {
      An error has occurred: {{ query.error() }}
    }
    <!-- If the Query is successful, you can access the data returned using
      the CreateDataConnectQueryResult.data() function. -->
    @if (query.data(); as data) {
      <!-- use your data to display something -->
            <div>Query successful!</div>
    }
  `,
})
export class MyComponent {
  // The `GetDailyLog` Query requires an argument of type `GetDailyLogVariables`:
  getDailyLogVars: GetDailyLogVariables = {
    id: ..., 
  };

  // Since the execution of the query is eager, you don't have to call `execute` to "execute" the Query.
  // Call the Query injector function to get a `CreateDataConnectQueryResult` object which holds the state of your Query.
  query = injectGetDailyLog(this.getDailyLogVars);
  // Variables can be defined inline as well.
  query = injectGetDailyLog({ id: ..., });

  // You can also pass in an options function (not object) of type `GetDailyLogOptions` to the Query injector function.
  options: GetDailyLogOptions = () => {
    return {
      staleTime: 5 * 1000
    };
  };
  query = injectGetDailyLog(this.getDailyLogVars, this.options);
}
```

## ListMyLogs
You can execute the `ListMyLogs` Query using the following Query injector, which is defined in [dataconnect-generated/angular/index.d.ts](./index.d.ts):

```javascript
injectListMyLogs(options?: ListMyLogsOptions, injector?: Injector): CreateDataConnectQueryResult<ListMyLogsData, undefined>;
```

### Variables
The `ListMyLogs` Query has no variables.
### Return Type
Recall that calling the `ListMyLogs` Query injector returns a `CreateDataConnectQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `CreateDataConnectQueryResult.status()` function. You can also check for pending / success / error status using the `CreateDataConnectQueryResult.isPending()`, `CreateDataConnectQueryResult.isSuccess()`, and `CreateDataConnectQueryResult.isError()` functions.

To access the data returned by a Query, use the `CreateDataConnectQueryResult.data()` function. The data for the `ListMyLogs` Query is of type `ListMyLogsData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface ListMyLogsData {
  dailyLogs: ({
    id: UUIDString;
    date: DateString;
    mood?: string | null;
  } & DailyLog_Key)[];
}
```

To learn more about the `CreateDataConnectQueryResult` object, see the [TanStack Query Firebase documentation](https://docs.page/invertase/tanstack-query-firebase/angular/data-connect/functions/injectDataConnectQuery) and the [TanStack Angular Query documentation](https://tanstack.com/query/v5/docs/framework/angular/reference/functions/injectquery).

### Using `ListMyLogs`'s Query injector

```javascript
... // other imports
import { connectorConfig } from '@dataconnect/generated';
import { injectListMyLogs, ListMyLogsOptions } from '@dataconnect/generated/angular'
import { DataConnect } from '@angular/fire/data-connect';
import { initializeApp } from '@angular/fire/app';

@Component({
  ... // other component fields
  template: `
    <!-- You can render your component dynamically based on the status of the Query. -->
    @if (query.isPending()) {
      Loading...
    }
    @if (query.error()) {
      An error has occurred: {{ query.error() }}
    }
    <!-- If the Query is successful, you can access the data returned using
      the CreateDataConnectQueryResult.data() function. -->
    @if (query.data(); as data) {
      <!-- use your data to display something -->
            <div>Query successful!</div>
    }
  `,
})
export class MyComponent {
  // Since the execution of the query is eager, you don't have to call `execute` to "execute" the Query.
  // Call the Query injector function to get a `CreateDataConnectQueryResult` object which holds the state of your Query.
  query = injectListMyLogs();

  // You can also pass in an options function (not object) of type `ListMyLogsOptions` to the Query injector function.
  options: ListMyLogsOptions = () => {
    return {
      staleTime: 5 * 1000
    };
  };
  query = injectListMyLogs(this.options);
}
```

## GetPrediction
You can execute the `GetPrediction` Query using the following Query injector, which is defined in [dataconnect-generated/angular/index.d.ts](./index.d.ts):

```javascript
injectGetPrediction(args: GetPredictionArgs, options?: GetPredictionOptions, injector?: Injector): CreateDataConnectQueryResult<GetPredictionData, GetPredictionVariables>;
```

### Variables
The `GetPrediction` Query requires an argument of type `GetPredictionVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface GetPredictionVariables {
  id: UUIDString;
}
```
### Return Type
Recall that calling the `GetPrediction` Query injector returns a `CreateDataConnectQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `CreateDataConnectQueryResult.status()` function. You can also check for pending / success / error status using the `CreateDataConnectQueryResult.isPending()`, `CreateDataConnectQueryResult.isSuccess()`, and `CreateDataConnectQueryResult.isError()` functions.

To access the data returned by a Query, use the `CreateDataConnectQueryResult.data()` function. The data for the `GetPrediction` Query is of type `GetPredictionData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface GetPredictionData {
  prediction?: {
    type: string;
    date?: DateString | null;
    confidenceScore?: number | null;
  };
}
```

To learn more about the `CreateDataConnectQueryResult` object, see the [TanStack Query Firebase documentation](https://docs.page/invertase/tanstack-query-firebase/angular/data-connect/functions/injectDataConnectQuery) and the [TanStack Angular Query documentation](https://tanstack.com/query/v5/docs/framework/angular/reference/functions/injectquery).

### Using `GetPrediction`'s Query injector

```javascript
... // other imports
import { connectorConfig, GetPredictionVariables } from '@dataconnect/generated';
import { injectGetPrediction, GetPredictionOptions } from '@dataconnect/generated/angular'
import { DataConnect } from '@angular/fire/data-connect';
import { initializeApp } from '@angular/fire/app';

@Component({
  ... // other component fields
  template: `
    <!-- You can render your component dynamically based on the status of the Query. -->
    @if (query.isPending()) {
      Loading...
    }
    @if (query.error()) {
      An error has occurred: {{ query.error() }}
    }
    <!-- If the Query is successful, you can access the data returned using
      the CreateDataConnectQueryResult.data() function. -->
    @if (query.data(); as data) {
      <!-- use your data to display something -->
            <div>Query successful!</div>
    }
  `,
})
export class MyComponent {
  // The `GetPrediction` Query requires an argument of type `GetPredictionVariables`:
  getPredictionVars: GetPredictionVariables = {
    id: ..., 
  };

  // Since the execution of the query is eager, you don't have to call `execute` to "execute" the Query.
  // Call the Query injector function to get a `CreateDataConnectQueryResult` object which holds the state of your Query.
  query = injectGetPrediction(this.getPredictionVars);
  // Variables can be defined inline as well.
  query = injectGetPrediction({ id: ..., });

  // You can also pass in an options function (not object) of type `GetPredictionOptions` to the Query injector function.
  options: GetPredictionOptions = () => {
    return {
      staleTime: 5 * 1000
    };
  };
  query = injectGetPrediction(this.getPredictionVars, this.options);
}
```

## ListMyPredictions
You can execute the `ListMyPredictions` Query using the following Query injector, which is defined in [dataconnect-generated/angular/index.d.ts](./index.d.ts):

```javascript
injectListMyPredictions(options?: ListMyPredictionsOptions, injector?: Injector): CreateDataConnectQueryResult<ListMyPredictionsData, undefined>;
```

### Variables
The `ListMyPredictions` Query has no variables.
### Return Type
Recall that calling the `ListMyPredictions` Query injector returns a `CreateDataConnectQueryResult` object. This object holds the state of your Query, including whether the Query is loading, has completed, or has succeeded/failed, and any data returned by the Query, among other things.

To check the status of a Query, use the `CreateDataConnectQueryResult.status()` function. You can also check for pending / success / error status using the `CreateDataConnectQueryResult.isPending()`, `CreateDataConnectQueryResult.isSuccess()`, and `CreateDataConnectQueryResult.isError()` functions.

To access the data returned by a Query, use the `CreateDataConnectQueryResult.data()` function. The data for the `ListMyPredictions` Query is of type `ListMyPredictionsData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface ListMyPredictionsData {
  predictions: ({
    id: UUIDString;
    type: string;
    date?: DateString | null;
  } & Prediction_Key)[];
}
```

To learn more about the `CreateDataConnectQueryResult` object, see the [TanStack Query Firebase documentation](https://docs.page/invertase/tanstack-query-firebase/angular/data-connect/functions/injectDataConnectQuery) and the [TanStack Angular Query documentation](https://tanstack.com/query/v5/docs/framework/angular/reference/functions/injectquery).

### Using `ListMyPredictions`'s Query injector

```javascript
... // other imports
import { connectorConfig } from '@dataconnect/generated';
import { injectListMyPredictions, ListMyPredictionsOptions } from '@dataconnect/generated/angular'
import { DataConnect } from '@angular/fire/data-connect';
import { initializeApp } from '@angular/fire/app';

@Component({
  ... // other component fields
  template: `
    <!-- You can render your component dynamically based on the status of the Query. -->
    @if (query.isPending()) {
      Loading...
    }
    @if (query.error()) {
      An error has occurred: {{ query.error() }}
    }
    <!-- If the Query is successful, you can access the data returned using
      the CreateDataConnectQueryResult.data() function. -->
    @if (query.data(); as data) {
      <!-- use your data to display something -->
            <div>Query successful!</div>
    }
  `,
})
export class MyComponent {
  // Since the execution of the query is eager, you don't have to call `execute` to "execute" the Query.
  // Call the Query injector function to get a `CreateDataConnectQueryResult` object which holds the state of your Query.
  query = injectListMyPredictions();

  // You can also pass in an options function (not object) of type `ListMyPredictionsOptions` to the Query injector function.
  options: ListMyPredictionsOptions = () => {
    return {
      staleTime: 5 * 1000
    };
  };
  query = injectListMyPredictions(this.options);
}
```

# Mutations

The Angular generated SDK provides Mutations injectors that call [`injectDataConnectMutation`](https://react-query-firebase.invertase.dev/angular/data-connect/mutations) from TanStack Query Firebase.

Calling these injectors will return a `CreateDataConnectMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, and the most recent data returned by the Mutation, among other things. To learn more about these injectors and how to use them, see the [TanStack Query Firebase documentation](https://react-query-firebase.invertase.dev/angular/data-connect/mutations).

Mutation injectors do not execute their Mutations automatically when called. Rather, after calling the Mutation injector and getting a `CreateDataConnectMutationResult` object, you must call the `CreateDataConnectMutationResult.mutate()` function to execute the Mutation.

To learn more about TanStack Angular Query's Mutations, see the [TanStack Angular Query documentation](https://tanstack.com/query/v5/docs/framework/angular/guides/mutations).

## Using Mutation Injectors
Here's a general overview of how to use the generated Mutation injectors in your code:

- Mutation injectors are not called with the arguments to the Mutation. Instead, arguments are passed to `CreateDataConnectMutationResult.mutate()`.
- If the Mutation has no variables, the `mutate()` function does not require arguments.
- If the Mutation has any required variables, the `mutate()` function will require at least one argument: an object that contains all the required variables for the Mutation.
- If the Mutation has some required and some optional variables, only required variables are necessary in the variables argument object, and optional variables may be provided as well.
- If all of the Mutation's variables are optional, the Mutation injector does not require any arguments.
- The Angular generated SDK's Mutation injectors do not accept `DataConnect` instances as arguments.
- Mutation injector functions can be called with or without passing in an `options` argument, whose type is a function which returns an object. The type is generated alongside the operation's injector function in [dataconnect-generated/angular/index.d.ts](./index.d.ts). The type is generated alongside the operation's injector function. To learn more about the `options` argument, see the [TanStack Angular Query documentation](https://tanstack.com/query/v5/docs/framework/angular/guides/mutations#mutation-side-effects).
  - `CreateDataConnectMutationResult.mutate()` also accepts an `options` argument. It's type is not a function which returns an object, but the object itself.
  - ***Special case:*** If the Mutation has no arguments (or all optional arguments and you wish to provide none), and you want to pass `options` to `CreateDataConnectMutationResult.mutate()`, you must pass `undefined` where you would normally pass the Mutation's arguments, and then may provide the options argument.

Below are examples of how to use the `example` connector's generated Mutation injectors to execute each Mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#operations-react-angular).

## CreateUserData
You can execute the `CreateUserData` Mutation using the `CreateDataConnectMutationResult` object returned by the following Mutation injector (which is defined in [dataconnect-generated/angular/index.d.ts](./index.d.ts)):
```javascript
injectCreateUserData(options?: CreateUserDataOptions, injector?: Injector): CreateDataConnectMutationResult<CreateUserDataData, undefined, >;
```

### Variables
The `CreateUserData` Mutation has no variables.
### Return Type
Recall that calling the `CreateUserData` Mutation injector returns a `CreateDataConnectMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `CreateDataConnectMutationResult.status()` function. You can also check for pending / success / error status using the `CreateDataConnectMutationResult.isPending()`, `CreateDataConnectMutationResult.isSuccess()`, and `CreateDataConnectMutationResult.isError()` functions.

To execute the Mutation, call `CreateDataConnectMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation. 

To access the data returned by a Mutation, use the `CreateDataConnectMutationResult.data()` function. The data for the `CreateUserData` Mutation is of type `CreateUserDataData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface CreateUserDataData {
  user_insert: User_Key;
}
```

You can also call `CreateDataConnectMutationResult.mutateAsync()`, which executes the Mutation and returns a promise with the data returned from the Mutation. To learn more, see the [TanStack Angular Query documentation](https://tanstack.com/query/latest/docs/framework/angular/guides/mutations#promises).

To learn more about the `CreateDataConnectMutationResult` object, see the [TanStack Query Firebase documentation](https://docs.page/invertase/tanstack-query-firebase/angular/data-connect/functions/injectDataConnectMutation) and the [TanStack Angular Query documentation](https://tanstack.com/query/v5/docs/framework/angular/reference/functions/injectmutation).

### Using `CreateUserData`'s Mutation injector

```javascript
... // other imports
import { connectorConfig } from '@dataconnect/generated';
import { injectCreateUserData, CreateUserDataOptions } from '@dataconnect/generated/angular'
import { DataConnect } from '@angular/fire/data-connect';
import { initializeApp } from '@angular/fire/app';

@Component({
  ... // other component fields
  template: `
    <!-- You can render your component dynamically based on the status of the Mutation. -->
    @if (mutation.isPending()) {
      Loading...
    }
    @if (mutation.error()) {
      An error has occurred: {{ mutation.error() }}
    }
    <!-- If the Mutation is successful, you can access the data returned using
      the CreateDataConnectMutationResult.data() function. -->
    @if (mutation.data(); as data) {
      <!-- Use your data to display something -->
      <div>Mutation successful!</div>
    }
    <!-- Let's create a button that executes our mutation when clicked. -->
    <button
      (disabled)="mutation.isPending()"
      (click)="executeMutation()"
    >
      {{ mutation.isPending() ? 'Pending...' : 'Mutate!' }}
    </button>
  `,
})
export class MyComponent {
  // Call the Mutation injector function to get a `CreateDataConnectMutationResult` object which holds the state of your Mutation.
  mutation = injectCreateUserData();

  // You can also pass in a `CreateUserDataOptions` function (not object) to the Mutation injector function.
  options: CreateUserDataOptions = () => {
    return {
      onSuccess: () => { console.log('Mutation succeeded!'); }
    };
  };
  mutation = injectCreateUserData(this.options);

  // After calling the Mutation injector function, you must call `CreateDataConnectMutationResult.mutate()` to execute the Mutation.
  executeMutation() {
    this.mutation.mutate();

    // You can call `CreateDataConnectMutationResult.mutateAsync()` to execute the Mutation and return a promise with the data returned from the Mutation.
    this.mutation.mutateAsync();

    // You can also pass in a `CreateUserDataOptions` object (not function) to `CreateDataConnectMutationResult.mutate()`.
    // Since this Mutation accepts no variables, you must pass `undefined` where you would normally pass the variables.
    this.mutation.mutate(undefined, this.options());
  }
}
```

## UpdateUserProfile
You can execute the `UpdateUserProfile` Mutation using the `CreateDataConnectMutationResult` object returned by the following Mutation injector (which is defined in [dataconnect-generated/angular/index.d.ts](./index.d.ts)):
```javascript
injectUpdateUserProfile(options?: UpdateUserProfileOptions, injector?: Injector): CreateDataConnectMutationResult<UpdateUserProfileData, undefined, >;
```

### Variables
The `UpdateUserProfile` Mutation has no variables.
### Return Type
Recall that calling the `UpdateUserProfile` Mutation injector returns a `CreateDataConnectMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `CreateDataConnectMutationResult.status()` function. You can also check for pending / success / error status using the `CreateDataConnectMutationResult.isPending()`, `CreateDataConnectMutationResult.isSuccess()`, and `CreateDataConnectMutationResult.isError()` functions.

To execute the Mutation, call `CreateDataConnectMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation. 

To access the data returned by a Mutation, use the `CreateDataConnectMutationResult.data()` function. The data for the `UpdateUserProfile` Mutation is of type `UpdateUserProfileData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface UpdateUserProfileData {
  userProfile_update?: UserProfile_Key | null;
}
```

You can also call `CreateDataConnectMutationResult.mutateAsync()`, which executes the Mutation and returns a promise with the data returned from the Mutation. To learn more, see the [TanStack Angular Query documentation](https://tanstack.com/query/latest/docs/framework/angular/guides/mutations#promises).

To learn more about the `CreateDataConnectMutationResult` object, see the [TanStack Query Firebase documentation](https://docs.page/invertase/tanstack-query-firebase/angular/data-connect/functions/injectDataConnectMutation) and the [TanStack Angular Query documentation](https://tanstack.com/query/v5/docs/framework/angular/reference/functions/injectmutation).

### Using `UpdateUserProfile`'s Mutation injector

```javascript
... // other imports
import { connectorConfig } from '@dataconnect/generated';
import { injectUpdateUserProfile, UpdateUserProfileOptions } from '@dataconnect/generated/angular'
import { DataConnect } from '@angular/fire/data-connect';
import { initializeApp } from '@angular/fire/app';

@Component({
  ... // other component fields
  template: `
    <!-- You can render your component dynamically based on the status of the Mutation. -->
    @if (mutation.isPending()) {
      Loading...
    }
    @if (mutation.error()) {
      An error has occurred: {{ mutation.error() }}
    }
    <!-- If the Mutation is successful, you can access the data returned using
      the CreateDataConnectMutationResult.data() function. -->
    @if (mutation.data(); as data) {
      <!-- Use your data to display something -->
      <div>Mutation successful!</div>
    }
    <!-- Let's create a button that executes our mutation when clicked. -->
    <button
      (disabled)="mutation.isPending()"
      (click)="executeMutation()"
    >
      {{ mutation.isPending() ? 'Pending...' : 'Mutate!' }}
    </button>
  `,
})
export class MyComponent {
  // Call the Mutation injector function to get a `CreateDataConnectMutationResult` object which holds the state of your Mutation.
  mutation = injectUpdateUserProfile();

  // You can also pass in a `UpdateUserProfileOptions` function (not object) to the Mutation injector function.
  options: UpdateUserProfileOptions = () => {
    return {
      onSuccess: () => { console.log('Mutation succeeded!'); }
    };
  };
  mutation = injectUpdateUserProfile(this.options);

  // After calling the Mutation injector function, you must call `CreateDataConnectMutationResult.mutate()` to execute the Mutation.
  executeMutation() {
    this.mutation.mutate();

    // You can call `CreateDataConnectMutationResult.mutateAsync()` to execute the Mutation and return a promise with the data returned from the Mutation.
    this.mutation.mutateAsync();

    // You can also pass in a `UpdateUserProfileOptions` object (not function) to `CreateDataConnectMutationResult.mutate()`.
    // Since this Mutation accepts no variables, you must pass `undefined` where you would normally pass the variables.
    this.mutation.mutate(undefined, this.options());
  }
}
```

## DeleteCycle
You can execute the `DeleteCycle` Mutation using the `CreateDataConnectMutationResult` object returned by the following Mutation injector (which is defined in [dataconnect-generated/angular/index.d.ts](./index.d.ts)):
```javascript
injectDeleteCycle(options?: DeleteCycleOptions, injector?: Injector): CreateDataConnectMutationResult<DeleteCycleData, DeleteCycleVariables, DeleteCycleVariables>;
```

### Variables
The `DeleteCycle` Mutation requires an argument of type `DeleteCycleVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface DeleteCycleVariables {
  id: UUIDString;
}
```
### Return Type
Recall that calling the `DeleteCycle` Mutation injector returns a `CreateDataConnectMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `CreateDataConnectMutationResult.status()` function. You can also check for pending / success / error status using the `CreateDataConnectMutationResult.isPending()`, `CreateDataConnectMutationResult.isSuccess()`, and `CreateDataConnectMutationResult.isError()` functions.

To execute the Mutation, call `CreateDataConnectMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation. 

To access the data returned by a Mutation, use the `CreateDataConnectMutationResult.data()` function. The data for the `DeleteCycle` Mutation is of type `DeleteCycleData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface DeleteCycleData {
  cycle_delete?: Cycle_Key | null;
}
```

You can also call `CreateDataConnectMutationResult.mutateAsync()`, which executes the Mutation and returns a promise with the data returned from the Mutation. To learn more, see the [TanStack Angular Query documentation](https://tanstack.com/query/latest/docs/framework/angular/guides/mutations#promises).

To learn more about the `CreateDataConnectMutationResult` object, see the [TanStack Query Firebase documentation](https://docs.page/invertase/tanstack-query-firebase/angular/data-connect/functions/injectDataConnectMutation) and the [TanStack Angular Query documentation](https://tanstack.com/query/v5/docs/framework/angular/reference/functions/injectmutation).

### Using `DeleteCycle`'s Mutation injector

```javascript
... // other imports
import { connectorConfig, DeleteCycleVariables } from '@dataconnect/generated';
import { injectDeleteCycle, DeleteCycleOptions } from '@dataconnect/generated/angular'
import { DataConnect } from '@angular/fire/data-connect';
import { initializeApp } from '@angular/fire/app';

@Component({
  ... // other component fields
  template: `
    <!-- You can render your component dynamically based on the status of the Mutation. -->
    @if (mutation.isPending()) {
      Loading...
    }
    @if (mutation.error()) {
      An error has occurred: {{ mutation.error() }}
    }
    <!-- If the Mutation is successful, you can access the data returned using
      the CreateDataConnectMutationResult.data() function. -->
    @if (mutation.data(); as data) {
      <!-- Use your data to display something -->
      <div>Mutation successful!</div>
    }
    <!-- Let's create a button that executes our mutation when clicked. -->
    <button
      (disabled)="mutation.isPending()"
      (click)="executeMutation()"
    >
      {{ mutation.isPending() ? 'Pending...' : 'Mutate!' }}
    </button>
  `,
})
export class MyComponent {
  // Call the Mutation injector function to get a `CreateDataConnectMutationResult` object which holds the state of your Mutation.
  mutation = injectDeleteCycle();

  // You can also pass in a `DeleteCycleOptions` function (not object) to the Mutation injector function.
  options: DeleteCycleOptions = () => {
    return {
      onSuccess: () => { console.log('Mutation succeeded!'); }
    };
  };
  mutation = injectDeleteCycle(this.options);

  // After calling the Mutation injector function, you must call `CreateDataConnectMutationResult.mutate()` to execute the Mutation.
  executeMutation() {
    // The `DeleteCycle` Mutation requires an argument of type `DeleteCycleVariables`:
    const deleteCycleVars: DeleteCycleVariables = {
      id: ..., 
    };
    this.mutation.mutate(deleteCycleVars);
    // Variables can be defined inline as well.
    this.mutation.mutate({ id: ..., });

    // You can call `CreateDataConnectMutationResult.mutateAsync()` to execute the Mutation and return a promise with the data returned from the Mutation.
    this.mutation.mutateAsync(deleteCycleVars);

    // You can also pass in a `DeleteCycleOptions` object (not function) to `CreateDataConnectMutationResult.mutate()`.
    this.mutation.mutate(deleteCycleVars, this.options());
  }
}
```

## CreateDailyLog
You can execute the `CreateDailyLog` Mutation using the `CreateDataConnectMutationResult` object returned by the following Mutation injector (which is defined in [dataconnect-generated/angular/index.d.ts](./index.d.ts)):
```javascript
injectCreateDailyLog(options?: CreateDailyLogOptions, injector?: Injector): CreateDataConnectMutationResult<CreateDailyLogData, CreateDailyLogVariables, CreateDailyLogVariables>;
```

### Variables
The `CreateDailyLog` Mutation requires an argument of type `CreateDailyLogVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface CreateDailyLogVariables {
  date: DateString;
  mood?: string | null;
}
```
### Return Type
Recall that calling the `CreateDailyLog` Mutation injector returns a `CreateDataConnectMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `CreateDataConnectMutationResult.status()` function. You can also check for pending / success / error status using the `CreateDataConnectMutationResult.isPending()`, `CreateDataConnectMutationResult.isSuccess()`, and `CreateDataConnectMutationResult.isError()` functions.

To execute the Mutation, call `CreateDataConnectMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation. 

To access the data returned by a Mutation, use the `CreateDataConnectMutationResult.data()` function. The data for the `CreateDailyLog` Mutation is of type `CreateDailyLogData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface CreateDailyLogData {
  dailyLog_insert: DailyLog_Key;
}
```

You can also call `CreateDataConnectMutationResult.mutateAsync()`, which executes the Mutation and returns a promise with the data returned from the Mutation. To learn more, see the [TanStack Angular Query documentation](https://tanstack.com/query/latest/docs/framework/angular/guides/mutations#promises).

To learn more about the `CreateDataConnectMutationResult` object, see the [TanStack Query Firebase documentation](https://docs.page/invertase/tanstack-query-firebase/angular/data-connect/functions/injectDataConnectMutation) and the [TanStack Angular Query documentation](https://tanstack.com/query/v5/docs/framework/angular/reference/functions/injectmutation).

### Using `CreateDailyLog`'s Mutation injector

```javascript
... // other imports
import { connectorConfig, CreateDailyLogVariables } from '@dataconnect/generated';
import { injectCreateDailyLog, CreateDailyLogOptions } from '@dataconnect/generated/angular'
import { DataConnect } from '@angular/fire/data-connect';
import { initializeApp } from '@angular/fire/app';

@Component({
  ... // other component fields
  template: `
    <!-- You can render your component dynamically based on the status of the Mutation. -->
    @if (mutation.isPending()) {
      Loading...
    }
    @if (mutation.error()) {
      An error has occurred: {{ mutation.error() }}
    }
    <!-- If the Mutation is successful, you can access the data returned using
      the CreateDataConnectMutationResult.data() function. -->
    @if (mutation.data(); as data) {
      <!-- Use your data to display something -->
      <div>Mutation successful!</div>
    }
    <!-- Let's create a button that executes our mutation when clicked. -->
    <button
      (disabled)="mutation.isPending()"
      (click)="executeMutation()"
    >
      {{ mutation.isPending() ? 'Pending...' : 'Mutate!' }}
    </button>
  `,
})
export class MyComponent {
  // Call the Mutation injector function to get a `CreateDataConnectMutationResult` object which holds the state of your Mutation.
  mutation = injectCreateDailyLog();

  // You can also pass in a `CreateDailyLogOptions` function (not object) to the Mutation injector function.
  options: CreateDailyLogOptions = () => {
    return {
      onSuccess: () => { console.log('Mutation succeeded!'); }
    };
  };
  mutation = injectCreateDailyLog(this.options);

  // After calling the Mutation injector function, you must call `CreateDataConnectMutationResult.mutate()` to execute the Mutation.
  executeMutation() {
    // The `CreateDailyLog` Mutation requires an argument of type `CreateDailyLogVariables`:
    const createDailyLogVars: CreateDailyLogVariables = {
      date: ..., 
      mood: ..., // optional
    };
    this.mutation.mutate(createDailyLogVars);
    // Variables can be defined inline as well.
    this.mutation.mutate({ date: ..., mood: ..., });

    // You can call `CreateDataConnectMutationResult.mutateAsync()` to execute the Mutation and return a promise with the data returned from the Mutation.
    this.mutation.mutateAsync(createDailyLogVars);

    // You can also pass in a `CreateDailyLogOptions` object (not function) to `CreateDataConnectMutationResult.mutate()`.
    this.mutation.mutate(createDailyLogVars, this.options());
  }
}
```

## UpdateDailyLog
You can execute the `UpdateDailyLog` Mutation using the `CreateDataConnectMutationResult` object returned by the following Mutation injector (which is defined in [dataconnect-generated/angular/index.d.ts](./index.d.ts)):
```javascript
injectUpdateDailyLog(options?: UpdateDailyLogOptions, injector?: Injector): CreateDataConnectMutationResult<UpdateDailyLogData, UpdateDailyLogVariables, UpdateDailyLogVariables>;
```

### Variables
The `UpdateDailyLog` Mutation requires an argument of type `UpdateDailyLogVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface UpdateDailyLogVariables {
  id: UUIDString;
  notes?: string | null;
}
```
### Return Type
Recall that calling the `UpdateDailyLog` Mutation injector returns a `CreateDataConnectMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `CreateDataConnectMutationResult.status()` function. You can also check for pending / success / error status using the `CreateDataConnectMutationResult.isPending()`, `CreateDataConnectMutationResult.isSuccess()`, and `CreateDataConnectMutationResult.isError()` functions.

To execute the Mutation, call `CreateDataConnectMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation. 

To access the data returned by a Mutation, use the `CreateDataConnectMutationResult.data()` function. The data for the `UpdateDailyLog` Mutation is of type `UpdateDailyLogData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface UpdateDailyLogData {
  dailyLog_update?: DailyLog_Key | null;
}
```

You can also call `CreateDataConnectMutationResult.mutateAsync()`, which executes the Mutation and returns a promise with the data returned from the Mutation. To learn more, see the [TanStack Angular Query documentation](https://tanstack.com/query/latest/docs/framework/angular/guides/mutations#promises).

To learn more about the `CreateDataConnectMutationResult` object, see the [TanStack Query Firebase documentation](https://docs.page/invertase/tanstack-query-firebase/angular/data-connect/functions/injectDataConnectMutation) and the [TanStack Angular Query documentation](https://tanstack.com/query/v5/docs/framework/angular/reference/functions/injectmutation).

### Using `UpdateDailyLog`'s Mutation injector

```javascript
... // other imports
import { connectorConfig, UpdateDailyLogVariables } from '@dataconnect/generated';
import { injectUpdateDailyLog, UpdateDailyLogOptions } from '@dataconnect/generated/angular'
import { DataConnect } from '@angular/fire/data-connect';
import { initializeApp } from '@angular/fire/app';

@Component({
  ... // other component fields
  template: `
    <!-- You can render your component dynamically based on the status of the Mutation. -->
    @if (mutation.isPending()) {
      Loading...
    }
    @if (mutation.error()) {
      An error has occurred: {{ mutation.error() }}
    }
    <!-- If the Mutation is successful, you can access the data returned using
      the CreateDataConnectMutationResult.data() function. -->
    @if (mutation.data(); as data) {
      <!-- Use your data to display something -->
      <div>Mutation successful!</div>
    }
    <!-- Let's create a button that executes our mutation when clicked. -->
    <button
      (disabled)="mutation.isPending()"
      (click)="executeMutation()"
    >
      {{ mutation.isPending() ? 'Pending...' : 'Mutate!' }}
    </button>
  `,
})
export class MyComponent {
  // Call the Mutation injector function to get a `CreateDataConnectMutationResult` object which holds the state of your Mutation.
  mutation = injectUpdateDailyLog();

  // You can also pass in a `UpdateDailyLogOptions` function (not object) to the Mutation injector function.
  options: UpdateDailyLogOptions = () => {
    return {
      onSuccess: () => { console.log('Mutation succeeded!'); }
    };
  };
  mutation = injectUpdateDailyLog(this.options);

  // After calling the Mutation injector function, you must call `CreateDataConnectMutationResult.mutate()` to execute the Mutation.
  executeMutation() {
    // The `UpdateDailyLog` Mutation requires an argument of type `UpdateDailyLogVariables`:
    const updateDailyLogVars: UpdateDailyLogVariables = {
      id: ..., 
      notes: ..., // optional
    };
    this.mutation.mutate(updateDailyLogVars);
    // Variables can be defined inline as well.
    this.mutation.mutate({ id: ..., notes: ..., });

    // You can call `CreateDataConnectMutationResult.mutateAsync()` to execute the Mutation and return a promise with the data returned from the Mutation.
    this.mutation.mutateAsync(updateDailyLogVars);

    // You can also pass in a `UpdateDailyLogOptions` object (not function) to `CreateDataConnectMutationResult.mutate()`.
    this.mutation.mutate(updateDailyLogVars, this.options());
  }
}
```

## DeleteDailyLog
You can execute the `DeleteDailyLog` Mutation using the `CreateDataConnectMutationResult` object returned by the following Mutation injector (which is defined in [dataconnect-generated/angular/index.d.ts](./index.d.ts)):
```javascript
injectDeleteDailyLog(options?: DeleteDailyLogOptions, injector?: Injector): CreateDataConnectMutationResult<DeleteDailyLogData, DeleteDailyLogVariables, DeleteDailyLogVariables>;
```

### Variables
The `DeleteDailyLog` Mutation requires an argument of type `DeleteDailyLogVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface DeleteDailyLogVariables {
  id: UUIDString;
}
```
### Return Type
Recall that calling the `DeleteDailyLog` Mutation injector returns a `CreateDataConnectMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `CreateDataConnectMutationResult.status()` function. You can also check for pending / success / error status using the `CreateDataConnectMutationResult.isPending()`, `CreateDataConnectMutationResult.isSuccess()`, and `CreateDataConnectMutationResult.isError()` functions.

To execute the Mutation, call `CreateDataConnectMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation. 

To access the data returned by a Mutation, use the `CreateDataConnectMutationResult.data()` function. The data for the `DeleteDailyLog` Mutation is of type `DeleteDailyLogData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface DeleteDailyLogData {
  dailyLog_delete?: DailyLog_Key | null;
}
```

You can also call `CreateDataConnectMutationResult.mutateAsync()`, which executes the Mutation and returns a promise with the data returned from the Mutation. To learn more, see the [TanStack Angular Query documentation](https://tanstack.com/query/latest/docs/framework/angular/guides/mutations#promises).

To learn more about the `CreateDataConnectMutationResult` object, see the [TanStack Query Firebase documentation](https://docs.page/invertase/tanstack-query-firebase/angular/data-connect/functions/injectDataConnectMutation) and the [TanStack Angular Query documentation](https://tanstack.com/query/v5/docs/framework/angular/reference/functions/injectmutation).

### Using `DeleteDailyLog`'s Mutation injector

```javascript
... // other imports
import { connectorConfig, DeleteDailyLogVariables } from '@dataconnect/generated';
import { injectDeleteDailyLog, DeleteDailyLogOptions } from '@dataconnect/generated/angular'
import { DataConnect } from '@angular/fire/data-connect';
import { initializeApp } from '@angular/fire/app';

@Component({
  ... // other component fields
  template: `
    <!-- You can render your component dynamically based on the status of the Mutation. -->
    @if (mutation.isPending()) {
      Loading...
    }
    @if (mutation.error()) {
      An error has occurred: {{ mutation.error() }}
    }
    <!-- If the Mutation is successful, you can access the data returned using
      the CreateDataConnectMutationResult.data() function. -->
    @if (mutation.data(); as data) {
      <!-- Use your data to display something -->
      <div>Mutation successful!</div>
    }
    <!-- Let's create a button that executes our mutation when clicked. -->
    <button
      (disabled)="mutation.isPending()"
      (click)="executeMutation()"
    >
      {{ mutation.isPending() ? 'Pending...' : 'Mutate!' }}
    </button>
  `,
})
export class MyComponent {
  // Call the Mutation injector function to get a `CreateDataConnectMutationResult` object which holds the state of your Mutation.
  mutation = injectDeleteDailyLog();

  // You can also pass in a `DeleteDailyLogOptions` function (not object) to the Mutation injector function.
  options: DeleteDailyLogOptions = () => {
    return {
      onSuccess: () => { console.log('Mutation succeeded!'); }
    };
  };
  mutation = injectDeleteDailyLog(this.options);

  // After calling the Mutation injector function, you must call `CreateDataConnectMutationResult.mutate()` to execute the Mutation.
  executeMutation() {
    // The `DeleteDailyLog` Mutation requires an argument of type `DeleteDailyLogVariables`:
    const deleteDailyLogVars: DeleteDailyLogVariables = {
      id: ..., 
    };
    this.mutation.mutate(deleteDailyLogVars);
    // Variables can be defined inline as well.
    this.mutation.mutate({ id: ..., });

    // You can call `CreateDataConnectMutationResult.mutateAsync()` to execute the Mutation and return a promise with the data returned from the Mutation.
    this.mutation.mutateAsync(deleteDailyLogVars);

    // You can also pass in a `DeleteDailyLogOptions` object (not function) to `CreateDataConnectMutationResult.mutate()`.
    this.mutation.mutate(deleteDailyLogVars, this.options());
  }
}
```

## InsertPrediction
You can execute the `InsertPrediction` Mutation using the `CreateDataConnectMutationResult` object returned by the following Mutation injector (which is defined in [dataconnect-generated/angular/index.d.ts](./index.d.ts)):
```javascript
injectInsertPrediction(options?: InsertPredictionOptions, injector?: Injector): CreateDataConnectMutationResult<InsertPredictionData, InsertPredictionVariables, InsertPredictionVariables>;
```

### Variables
The `InsertPrediction` Mutation requires an argument of type `InsertPredictionVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface InsertPredictionVariables {
  type: string;
  date?: DateString | null;
}
```
### Return Type
Recall that calling the `InsertPrediction` Mutation injector returns a `CreateDataConnectMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `CreateDataConnectMutationResult.status()` function. You can also check for pending / success / error status using the `CreateDataConnectMutationResult.isPending()`, `CreateDataConnectMutationResult.isSuccess()`, and `CreateDataConnectMutationResult.isError()` functions.

To execute the Mutation, call `CreateDataConnectMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation. 

To access the data returned by a Mutation, use the `CreateDataConnectMutationResult.data()` function. The data for the `InsertPrediction` Mutation is of type `InsertPredictionData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface InsertPredictionData {
  prediction_insert: Prediction_Key;
}
```

You can also call `CreateDataConnectMutationResult.mutateAsync()`, which executes the Mutation and returns a promise with the data returned from the Mutation. To learn more, see the [TanStack Angular Query documentation](https://tanstack.com/query/latest/docs/framework/angular/guides/mutations#promises).

To learn more about the `CreateDataConnectMutationResult` object, see the [TanStack Query Firebase documentation](https://docs.page/invertase/tanstack-query-firebase/angular/data-connect/functions/injectDataConnectMutation) and the [TanStack Angular Query documentation](https://tanstack.com/query/v5/docs/framework/angular/reference/functions/injectmutation).

### Using `InsertPrediction`'s Mutation injector

```javascript
... // other imports
import { connectorConfig, InsertPredictionVariables } from '@dataconnect/generated';
import { injectInsertPrediction, InsertPredictionOptions } from '@dataconnect/generated/angular'
import { DataConnect } from '@angular/fire/data-connect';
import { initializeApp } from '@angular/fire/app';

@Component({
  ... // other component fields
  template: `
    <!-- You can render your component dynamically based on the status of the Mutation. -->
    @if (mutation.isPending()) {
      Loading...
    }
    @if (mutation.error()) {
      An error has occurred: {{ mutation.error() }}
    }
    <!-- If the Mutation is successful, you can access the data returned using
      the CreateDataConnectMutationResult.data() function. -->
    @if (mutation.data(); as data) {
      <!-- Use your data to display something -->
      <div>Mutation successful!</div>
    }
    <!-- Let's create a button that executes our mutation when clicked. -->
    <button
      (disabled)="mutation.isPending()"
      (click)="executeMutation()"
    >
      {{ mutation.isPending() ? 'Pending...' : 'Mutate!' }}
    </button>
  `,
})
export class MyComponent {
  // Call the Mutation injector function to get a `CreateDataConnectMutationResult` object which holds the state of your Mutation.
  mutation = injectInsertPrediction();

  // You can also pass in a `InsertPredictionOptions` function (not object) to the Mutation injector function.
  options: InsertPredictionOptions = () => {
    return {
      onSuccess: () => { console.log('Mutation succeeded!'); }
    };
  };
  mutation = injectInsertPrediction(this.options);

  // After calling the Mutation injector function, you must call `CreateDataConnectMutationResult.mutate()` to execute the Mutation.
  executeMutation() {
    // The `InsertPrediction` Mutation requires an argument of type `InsertPredictionVariables`:
    const insertPredictionVars: InsertPredictionVariables = {
      type: ..., 
      date: ..., // optional
    };
    this.mutation.mutate(insertPredictionVars);
    // Variables can be defined inline as well.
    this.mutation.mutate({ type: ..., date: ..., });

    // You can call `CreateDataConnectMutationResult.mutateAsync()` to execute the Mutation and return a promise with the data returned from the Mutation.
    this.mutation.mutateAsync(insertPredictionVars);

    // You can also pass in a `InsertPredictionOptions` object (not function) to `CreateDataConnectMutationResult.mutate()`.
    this.mutation.mutate(insertPredictionVars, this.options());
  }
}
```

## UpdatePrediction
You can execute the `UpdatePrediction` Mutation using the `CreateDataConnectMutationResult` object returned by the following Mutation injector (which is defined in [dataconnect-generated/angular/index.d.ts](./index.d.ts)):
```javascript
injectUpdatePrediction(options?: UpdatePredictionOptions, injector?: Injector): CreateDataConnectMutationResult<UpdatePredictionData, UpdatePredictionVariables, UpdatePredictionVariables>;
```

### Variables
The `UpdatePrediction` Mutation requires an argument of type `UpdatePredictionVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface UpdatePredictionVariables {
  id: UUIDString;
  confidence?: number | null;
}
```
### Return Type
Recall that calling the `UpdatePrediction` Mutation injector returns a `CreateDataConnectMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `CreateDataConnectMutationResult.status()` function. You can also check for pending / success / error status using the `CreateDataConnectMutationResult.isPending()`, `CreateDataConnectMutationResult.isSuccess()`, and `CreateDataConnectMutationResult.isError()` functions.

To execute the Mutation, call `CreateDataConnectMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation. 

To access the data returned by a Mutation, use the `CreateDataConnectMutationResult.data()` function. The data for the `UpdatePrediction` Mutation is of type `UpdatePredictionData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface UpdatePredictionData {
  prediction_update?: Prediction_Key | null;
}
```

You can also call `CreateDataConnectMutationResult.mutateAsync()`, which executes the Mutation and returns a promise with the data returned from the Mutation. To learn more, see the [TanStack Angular Query documentation](https://tanstack.com/query/latest/docs/framework/angular/guides/mutations#promises).

To learn more about the `CreateDataConnectMutationResult` object, see the [TanStack Query Firebase documentation](https://docs.page/invertase/tanstack-query-firebase/angular/data-connect/functions/injectDataConnectMutation) and the [TanStack Angular Query documentation](https://tanstack.com/query/v5/docs/framework/angular/reference/functions/injectmutation).

### Using `UpdatePrediction`'s Mutation injector

```javascript
... // other imports
import { connectorConfig, UpdatePredictionVariables } from '@dataconnect/generated';
import { injectUpdatePrediction, UpdatePredictionOptions } from '@dataconnect/generated/angular'
import { DataConnect } from '@angular/fire/data-connect';
import { initializeApp } from '@angular/fire/app';

@Component({
  ... // other component fields
  template: `
    <!-- You can render your component dynamically based on the status of the Mutation. -->
    @if (mutation.isPending()) {
      Loading...
    }
    @if (mutation.error()) {
      An error has occurred: {{ mutation.error() }}
    }
    <!-- If the Mutation is successful, you can access the data returned using
      the CreateDataConnectMutationResult.data() function. -->
    @if (mutation.data(); as data) {
      <!-- Use your data to display something -->
      <div>Mutation successful!</div>
    }
    <!-- Let's create a button that executes our mutation when clicked. -->
    <button
      (disabled)="mutation.isPending()"
      (click)="executeMutation()"
    >
      {{ mutation.isPending() ? 'Pending...' : 'Mutate!' }}
    </button>
  `,
})
export class MyComponent {
  // Call the Mutation injector function to get a `CreateDataConnectMutationResult` object which holds the state of your Mutation.
  mutation = injectUpdatePrediction();

  // You can also pass in a `UpdatePredictionOptions` function (not object) to the Mutation injector function.
  options: UpdatePredictionOptions = () => {
    return {
      onSuccess: () => { console.log('Mutation succeeded!'); }
    };
  };
  mutation = injectUpdatePrediction(this.options);

  // After calling the Mutation injector function, you must call `CreateDataConnectMutationResult.mutate()` to execute the Mutation.
  executeMutation() {
    // The `UpdatePrediction` Mutation requires an argument of type `UpdatePredictionVariables`:
    const updatePredictionVars: UpdatePredictionVariables = {
      id: ..., 
      confidence: ..., // optional
    };
    this.mutation.mutate(updatePredictionVars);
    // Variables can be defined inline as well.
    this.mutation.mutate({ id: ..., confidence: ..., });

    // You can call `CreateDataConnectMutationResult.mutateAsync()` to execute the Mutation and return a promise with the data returned from the Mutation.
    this.mutation.mutateAsync(updatePredictionVars);

    // You can also pass in a `UpdatePredictionOptions` object (not function) to `CreateDataConnectMutationResult.mutate()`.
    this.mutation.mutate(updatePredictionVars, this.options());
  }
}
```

## DeletePrediction
You can execute the `DeletePrediction` Mutation using the `CreateDataConnectMutationResult` object returned by the following Mutation injector (which is defined in [dataconnect-generated/angular/index.d.ts](./index.d.ts)):
```javascript
injectDeletePrediction(options?: DeletePredictionOptions, injector?: Injector): CreateDataConnectMutationResult<DeletePredictionData, DeletePredictionVariables, DeletePredictionVariables>;
```

### Variables
The `DeletePrediction` Mutation requires an argument of type `DeletePredictionVariables`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:

```javascript
export interface DeletePredictionVariables {
  id: UUIDString;
}
```
### Return Type
Recall that calling the `DeletePrediction` Mutation injector returns a `CreateDataConnectMutationResult` object. This object holds the state of your Mutation, including whether the Mutation is loading, has completed, or has succeeded/failed, among other things.

To check the status of a Mutation, use the `CreateDataConnectMutationResult.status()` function. You can also check for pending / success / error status using the `CreateDataConnectMutationResult.isPending()`, `CreateDataConnectMutationResult.isSuccess()`, and `CreateDataConnectMutationResult.isError()` functions.

To execute the Mutation, call `CreateDataConnectMutationResult.mutate()`. This function executes the Mutation, but does not return the data from the Mutation. 

To access the data returned by a Mutation, use the `CreateDataConnectMutationResult.data()` function. The data for the `DeletePrediction` Mutation is of type `DeletePredictionData`, which is defined in [dataconnect-generated/index.d.ts](../index.d.ts). It has the following fields:
```javascript
export interface DeletePredictionData {
  prediction_delete?: Prediction_Key | null;
}
```

You can also call `CreateDataConnectMutationResult.mutateAsync()`, which executes the Mutation and returns a promise with the data returned from the Mutation. To learn more, see the [TanStack Angular Query documentation](https://tanstack.com/query/latest/docs/framework/angular/guides/mutations#promises).

To learn more about the `CreateDataConnectMutationResult` object, see the [TanStack Query Firebase documentation](https://docs.page/invertase/tanstack-query-firebase/angular/data-connect/functions/injectDataConnectMutation) and the [TanStack Angular Query documentation](https://tanstack.com/query/v5/docs/framework/angular/reference/functions/injectmutation).

### Using `DeletePrediction`'s Mutation injector

```javascript
... // other imports
import { connectorConfig, DeletePredictionVariables } from '@dataconnect/generated';
import { injectDeletePrediction, DeletePredictionOptions } from '@dataconnect/generated/angular'
import { DataConnect } from '@angular/fire/data-connect';
import { initializeApp } from '@angular/fire/app';

@Component({
  ... // other component fields
  template: `
    <!-- You can render your component dynamically based on the status of the Mutation. -->
    @if (mutation.isPending()) {
      Loading...
    }
    @if (mutation.error()) {
      An error has occurred: {{ mutation.error() }}
    }
    <!-- If the Mutation is successful, you can access the data returned using
      the CreateDataConnectMutationResult.data() function. -->
    @if (mutation.data(); as data) {
      <!-- Use your data to display something -->
      <div>Mutation successful!</div>
    }
    <!-- Let's create a button that executes our mutation when clicked. -->
    <button
      (disabled)="mutation.isPending()"
      (click)="executeMutation()"
    >
      {{ mutation.isPending() ? 'Pending...' : 'Mutate!' }}
    </button>
  `,
})
export class MyComponent {
  // Call the Mutation injector function to get a `CreateDataConnectMutationResult` object which holds the state of your Mutation.
  mutation = injectDeletePrediction();

  // You can also pass in a `DeletePredictionOptions` function (not object) to the Mutation injector function.
  options: DeletePredictionOptions = () => {
    return {
      onSuccess: () => { console.log('Mutation succeeded!'); }
    };
  };
  mutation = injectDeletePrediction(this.options);

  // After calling the Mutation injector function, you must call `CreateDataConnectMutationResult.mutate()` to execute the Mutation.
  executeMutation() {
    // The `DeletePrediction` Mutation requires an argument of type `DeletePredictionVariables`:
    const deletePredictionVars: DeletePredictionVariables = {
      id: ..., 
    };
    this.mutation.mutate(deletePredictionVars);
    // Variables can be defined inline as well.
    this.mutation.mutate({ id: ..., });

    // You can call `CreateDataConnectMutationResult.mutateAsync()` to execute the Mutation and return a promise with the data returned from the Mutation.
    this.mutation.mutateAsync(deletePredictionVars);

    // You can also pass in a `DeletePredictionOptions` object (not function) to `CreateDataConnectMutationResult.mutate()`.
    this.mutation.mutate(deletePredictionVars, this.options());
  }
}
```

