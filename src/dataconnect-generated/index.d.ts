import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, ExecuteQueryOptions, MutationRef, MutationPromise, DataConnectSettings } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;
export const dataConnectSettings: DataConnectSettings;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface CreateDailyLogData {
  dailyLog_insert: DailyLog_Key;
}

export interface CreateDailyLogVariables {
  date: DateString;
  mood?: string | null;
}

export interface CreateUserDataData {
  user_insert: User_Key;
}

export interface Cycle_Key {
  id: UUIDString;
  __typename?: 'Cycle_Key';
}

export interface DailyLog_Key {
  id: UUIDString;
  __typename?: 'DailyLog_Key';
}

export interface DeleteCycleData {
  cycle_delete?: Cycle_Key | null;
}

export interface DeleteCycleVariables {
  id: UUIDString;
}

export interface DeleteDailyLogData {
  dailyLog_delete?: DailyLog_Key | null;
}

export interface DeleteDailyLogVariables {
  id: UUIDString;
}

export interface DeletePredictionData {
  prediction_delete?: Prediction_Key | null;
}

export interface DeletePredictionVariables {
  id: UUIDString;
}

export interface GetCycleData {
  cycle?: {
    startDate: DateString;
    endDate?: DateString | null;
    predictedLength?: number | null;
  };
}

export interface GetCycleVariables {
  id: UUIDString;
}

export interface GetDailyLogData {
  dailyLog?: {
    date: DateString;
    mood?: string | null;
    notes?: string | null;
  };
}

export interface GetDailyLogVariables {
  id: UUIDString;
}

export interface GetPredictionData {
  prediction?: {
    type: string;
    date?: DateString | null;
    confidenceScore?: number | null;
  };
}

export interface GetPredictionVariables {
  id: UUIDString;
}

export interface InsertPredictionData {
  prediction_insert: Prediction_Key;
}

export interface InsertPredictionVariables {
  type: string;
  date?: DateString | null;
}

export interface ListMyCyclesData {
  cycles: ({
    id: UUIDString;
    startDate: DateString;
    endDate?: DateString | null;
  } & Cycle_Key)[];
}

export interface ListMyLogsData {
  dailyLogs: ({
    id: UUIDString;
    date: DateString;
    mood?: string | null;
  } & DailyLog_Key)[];
}

export interface ListMyPredictionsData {
  predictions: ({
    id: UUIDString;
    type: string;
    date?: DateString | null;
  } & Prediction_Key)[];
}

export interface Prediction_Key {
  id: UUIDString;
  __typename?: 'Prediction_Key';
}

export interface UpdateDailyLogData {
  dailyLog_update?: DailyLog_Key | null;
}

export interface UpdateDailyLogVariables {
  id: UUIDString;
  notes?: string | null;
}

export interface UpdatePredictionData {
  prediction_update?: Prediction_Key | null;
}

export interface UpdatePredictionVariables {
  id: UUIDString;
  confidence?: number | null;
}

export interface UpdateUserProfileData {
  userProfile_update?: UserProfile_Key | null;
}

export interface UserProfile_Key {
  id: UUIDString;
  __typename?: 'UserProfile_Key';
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateUserDataRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<CreateUserDataData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<CreateUserDataData, undefined>;
  operationName: string;
}
export const createUserDataRef: CreateUserDataRef;

export function createUserData(): MutationPromise<CreateUserDataData, undefined>;
export function createUserData(dc: DataConnect): MutationPromise<CreateUserDataData, undefined>;

interface UpdateUserProfileRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<UpdateUserProfileData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<UpdateUserProfileData, undefined>;
  operationName: string;
}
export const updateUserProfileRef: UpdateUserProfileRef;

export function updateUserProfile(): MutationPromise<UpdateUserProfileData, undefined>;
export function updateUserProfile(dc: DataConnect): MutationPromise<UpdateUserProfileData, undefined>;

interface DeleteCycleRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteCycleVariables): MutationRef<DeleteCycleData, DeleteCycleVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteCycleVariables): MutationRef<DeleteCycleData, DeleteCycleVariables>;
  operationName: string;
}
export const deleteCycleRef: DeleteCycleRef;

export function deleteCycle(vars: DeleteCycleVariables): MutationPromise<DeleteCycleData, DeleteCycleVariables>;
export function deleteCycle(dc: DataConnect, vars: DeleteCycleVariables): MutationPromise<DeleteCycleData, DeleteCycleVariables>;

interface GetCycleRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetCycleVariables): QueryRef<GetCycleData, GetCycleVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetCycleVariables): QueryRef<GetCycleData, GetCycleVariables>;
  operationName: string;
}
export const getCycleRef: GetCycleRef;

export function getCycle(vars: GetCycleVariables, options?: ExecuteQueryOptions): QueryPromise<GetCycleData, GetCycleVariables>;
export function getCycle(dc: DataConnect, vars: GetCycleVariables, options?: ExecuteQueryOptions): QueryPromise<GetCycleData, GetCycleVariables>;

interface ListMyCyclesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMyCyclesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListMyCyclesData, undefined>;
  operationName: string;
}
export const listMyCyclesRef: ListMyCyclesRef;

export function listMyCycles(options?: ExecuteQueryOptions): QueryPromise<ListMyCyclesData, undefined>;
export function listMyCycles(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListMyCyclesData, undefined>;

interface CreateDailyLogRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateDailyLogVariables): MutationRef<CreateDailyLogData, CreateDailyLogVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateDailyLogVariables): MutationRef<CreateDailyLogData, CreateDailyLogVariables>;
  operationName: string;
}
export const createDailyLogRef: CreateDailyLogRef;

export function createDailyLog(vars: CreateDailyLogVariables): MutationPromise<CreateDailyLogData, CreateDailyLogVariables>;
export function createDailyLog(dc: DataConnect, vars: CreateDailyLogVariables): MutationPromise<CreateDailyLogData, CreateDailyLogVariables>;

interface UpdateDailyLogRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateDailyLogVariables): MutationRef<UpdateDailyLogData, UpdateDailyLogVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateDailyLogVariables): MutationRef<UpdateDailyLogData, UpdateDailyLogVariables>;
  operationName: string;
}
export const updateDailyLogRef: UpdateDailyLogRef;

export function updateDailyLog(vars: UpdateDailyLogVariables): MutationPromise<UpdateDailyLogData, UpdateDailyLogVariables>;
export function updateDailyLog(dc: DataConnect, vars: UpdateDailyLogVariables): MutationPromise<UpdateDailyLogData, UpdateDailyLogVariables>;

interface DeleteDailyLogRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeleteDailyLogVariables): MutationRef<DeleteDailyLogData, DeleteDailyLogVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeleteDailyLogVariables): MutationRef<DeleteDailyLogData, DeleteDailyLogVariables>;
  operationName: string;
}
export const deleteDailyLogRef: DeleteDailyLogRef;

export function deleteDailyLog(vars: DeleteDailyLogVariables): MutationPromise<DeleteDailyLogData, DeleteDailyLogVariables>;
export function deleteDailyLog(dc: DataConnect, vars: DeleteDailyLogVariables): MutationPromise<DeleteDailyLogData, DeleteDailyLogVariables>;

interface GetDailyLogRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetDailyLogVariables): QueryRef<GetDailyLogData, GetDailyLogVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetDailyLogVariables): QueryRef<GetDailyLogData, GetDailyLogVariables>;
  operationName: string;
}
export const getDailyLogRef: GetDailyLogRef;

export function getDailyLog(vars: GetDailyLogVariables, options?: ExecuteQueryOptions): QueryPromise<GetDailyLogData, GetDailyLogVariables>;
export function getDailyLog(dc: DataConnect, vars: GetDailyLogVariables, options?: ExecuteQueryOptions): QueryPromise<GetDailyLogData, GetDailyLogVariables>;

interface ListMyLogsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMyLogsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListMyLogsData, undefined>;
  operationName: string;
}
export const listMyLogsRef: ListMyLogsRef;

export function listMyLogs(options?: ExecuteQueryOptions): QueryPromise<ListMyLogsData, undefined>;
export function listMyLogs(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListMyLogsData, undefined>;

interface InsertPredictionRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: InsertPredictionVariables): MutationRef<InsertPredictionData, InsertPredictionVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: InsertPredictionVariables): MutationRef<InsertPredictionData, InsertPredictionVariables>;
  operationName: string;
}
export const insertPredictionRef: InsertPredictionRef;

export function insertPrediction(vars: InsertPredictionVariables): MutationPromise<InsertPredictionData, InsertPredictionVariables>;
export function insertPrediction(dc: DataConnect, vars: InsertPredictionVariables): MutationPromise<InsertPredictionData, InsertPredictionVariables>;

interface UpdatePredictionRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdatePredictionVariables): MutationRef<UpdatePredictionData, UpdatePredictionVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdatePredictionVariables): MutationRef<UpdatePredictionData, UpdatePredictionVariables>;
  operationName: string;
}
export const updatePredictionRef: UpdatePredictionRef;

export function updatePrediction(vars: UpdatePredictionVariables): MutationPromise<UpdatePredictionData, UpdatePredictionVariables>;
export function updatePrediction(dc: DataConnect, vars: UpdatePredictionVariables): MutationPromise<UpdatePredictionData, UpdatePredictionVariables>;

interface DeletePredictionRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: DeletePredictionVariables): MutationRef<DeletePredictionData, DeletePredictionVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: DeletePredictionVariables): MutationRef<DeletePredictionData, DeletePredictionVariables>;
  operationName: string;
}
export const deletePredictionRef: DeletePredictionRef;

export function deletePrediction(vars: DeletePredictionVariables): MutationPromise<DeletePredictionData, DeletePredictionVariables>;
export function deletePrediction(dc: DataConnect, vars: DeletePredictionVariables): MutationPromise<DeletePredictionData, DeletePredictionVariables>;

interface GetPredictionRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetPredictionVariables): QueryRef<GetPredictionData, GetPredictionVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetPredictionVariables): QueryRef<GetPredictionData, GetPredictionVariables>;
  operationName: string;
}
export const getPredictionRef: GetPredictionRef;

export function getPrediction(vars: GetPredictionVariables, options?: ExecuteQueryOptions): QueryPromise<GetPredictionData, GetPredictionVariables>;
export function getPrediction(dc: DataConnect, vars: GetPredictionVariables, options?: ExecuteQueryOptions): QueryPromise<GetPredictionData, GetPredictionVariables>;

interface ListMyPredictionsRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMyPredictionsData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListMyPredictionsData, undefined>;
  operationName: string;
}
export const listMyPredictionsRef: ListMyPredictionsRef;

export function listMyPredictions(options?: ExecuteQueryOptions): QueryPromise<ListMyPredictionsData, undefined>;
export function listMyPredictions(dc: DataConnect, options?: ExecuteQueryOptions): QueryPromise<ListMyPredictionsData, undefined>;

