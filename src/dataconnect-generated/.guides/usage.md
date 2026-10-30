# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.


### Angular

The generated SDK creates injectable wrapper functions.

Here's an example:
```
import { injectCreateUserData, injectUpdateUserProfile, injectDeleteCycle, injectGetCycle, injectListMyCycles, injectCreateDailyLog, injectUpdateDailyLog, injectDeleteDailyLog, injectGetDailyLog, injectListMyLogs } from '@dataconnect/generated/angular';

@Component({
  selector: 'my-component',
  ...
})
class MyComponent {
  // The types of these injectors are available in angular/index.d.ts
  private readonly CreateUserDataOperation = injectCreateUserData();
  private readonly UpdateUserProfileOperation = injectUpdateUserProfile();
  private readonly DeleteCycleOperation = injectDeleteCycle(deleteCycleVars);
  private readonly GetCycleOperation = injectGetCycle(getCycleVars);
  private readonly ListMyCyclesOperation = injectListMyCycles();
  private readonly CreateDailyLogOperation = injectCreateDailyLog(createDailyLogVars);
  private readonly UpdateDailyLogOperation = injectUpdateDailyLog(updateDailyLogVars);
  private readonly DeleteDailyLogOperation = injectDeleteDailyLog(deleteDailyLogVars);
  private readonly GetDailyLogOperation = injectGetDailyLog(getDailyLogVars);
  private readonly ListMyLogsOperation = injectListMyLogs();
  }
```

Each operation is a wrapper function around Tanstack Query Angular.

Here's an example:
```ts
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'simple-example',
  template: `
    @if (movies.isPending()) {
      Loading...
    }
    @if (movies.error()) {
      An error has occurred: {{ movies.error().message }}
    }
    @if (movies.data(); as data) {
      @for (movie of data.movies ; track
        movie.id) {
      <h1>{{ movie.title }}</h1>
      <p>{{ movie.synopsis }}</p>
      }
    }
  `
})
export class SimpleExampleComponent {
  http = inject(HttpClient)

  movies = injectListMovies();
}
```




## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { createUserData, updateUserProfile, deleteCycle, getCycle, listMyCycles, createDailyLog, updateDailyLog, deleteDailyLog, getDailyLog, listMyLogs } from '@dataconnect/generated';


// Operation CreateUserData: 
const { data } = await CreateUserData(dataConnect);

// Operation UpdateUserProfile: 
const { data } = await UpdateUserProfile(dataConnect);

// Operation DeleteCycle:  For variables, look at type DeleteCycleVars in ../index.d.ts
const { data } = await DeleteCycle(dataConnect, deleteCycleVars);

// Operation GetCycle:  For variables, look at type GetCycleVars in ../index.d.ts
const { data } = await GetCycle(dataConnect, getCycleVars);

// Operation ListMyCycles: 
const { data } = await ListMyCycles(dataConnect);

// Operation CreateDailyLog:  For variables, look at type CreateDailyLogVars in ../index.d.ts
const { data } = await CreateDailyLog(dataConnect, createDailyLogVars);

// Operation UpdateDailyLog:  For variables, look at type UpdateDailyLogVars in ../index.d.ts
const { data } = await UpdateDailyLog(dataConnect, updateDailyLogVars);

// Operation DeleteDailyLog:  For variables, look at type DeleteDailyLogVars in ../index.d.ts
const { data } = await DeleteDailyLog(dataConnect, deleteDailyLogVars);

// Operation GetDailyLog:  For variables, look at type GetDailyLogVars in ../index.d.ts
const { data } = await GetDailyLog(dataConnect, getDailyLogVars);

// Operation ListMyLogs: 
const { data } = await ListMyLogs(dataConnect);


```