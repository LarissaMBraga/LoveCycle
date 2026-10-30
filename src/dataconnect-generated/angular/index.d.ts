import { CreateUserDataData, UpdateUserProfileData, DeleteCycleData, DeleteCycleVariables, GetCycleData, GetCycleVariables, ListMyCyclesData, CreateDailyLogData, CreateDailyLogVariables, UpdateDailyLogData, UpdateDailyLogVariables, DeleteDailyLogData, DeleteDailyLogVariables, GetDailyLogData, GetDailyLogVariables, ListMyLogsData, InsertPredictionData, InsertPredictionVariables, UpdatePredictionData, UpdatePredictionVariables, DeletePredictionData, DeletePredictionVariables, GetPredictionData, GetPredictionVariables, ListMyPredictionsData } from '../';
import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, ExecuteQueryOptions, MutationRef, MutationPromise} from '@angular/fire/data-connect';
import { CreateQueryResult, CreateMutationResult} from '@tanstack/angular-query-experimental';
import { CreateDataConnectQueryResult, CreateDataConnectQueryOptions, CreateDataConnectMutationResult, DataConnectMutationOptionsUndefinedMutationFn } from '@tanstack-query-firebase/angular/data-connect';
import { FirebaseError } from 'firebase/app';
import { Injector } from '@angular/core';

type CreateUserDataOptions = DataConnectMutationOptionsUndefinedMutationFn<CreateUserDataData, FirebaseError, undefined>;
export function injectCreateUserData(options?: CreateUserDataOptions, injector?: Injector): CreateDataConnectMutationResult<CreateUserDataData, undefined, >;

type UpdateUserProfileOptions = DataConnectMutationOptionsUndefinedMutationFn<UpdateUserProfileData, FirebaseError, undefined>;
export function injectUpdateUserProfile(options?: UpdateUserProfileOptions, injector?: Injector): CreateDataConnectMutationResult<UpdateUserProfileData, undefined, >;

type DeleteCycleOptions = DataConnectMutationOptionsUndefinedMutationFn<DeleteCycleData, FirebaseError, DeleteCycleVariables>;
export function injectDeleteCycle(options?: DeleteCycleOptions, injector?: Injector): CreateDataConnectMutationResult<DeleteCycleData, DeleteCycleVariables, DeleteCycleVariables>;

type GetCycleArgs = GetCycleVariables | (() => GetCycleVariables);
export type GetCycleOptions = () => Omit<CreateDataConnectQueryOptions<GetCycleData, GetCycleVariables>, 'queryFn'>;
export function injectGetCycle(args: GetCycleArgs, options?: GetCycleOptions, injector?: Injector): CreateDataConnectQueryResult<GetCycleData, GetCycleVariables>;

export type ListMyCyclesOptions = () => Omit<CreateDataConnectQueryOptions<ListMyCyclesData, undefined>, 'queryFn'>;
export function injectListMyCycles(options?: ListMyCyclesOptions, injector?: Injector): CreateDataConnectQueryResult<ListMyCyclesData, undefined>;

type CreateDailyLogOptions = DataConnectMutationOptionsUndefinedMutationFn<CreateDailyLogData, FirebaseError, CreateDailyLogVariables>;
export function injectCreateDailyLog(options?: CreateDailyLogOptions, injector?: Injector): CreateDataConnectMutationResult<CreateDailyLogData, CreateDailyLogVariables, CreateDailyLogVariables>;

type UpdateDailyLogOptions = DataConnectMutationOptionsUndefinedMutationFn<UpdateDailyLogData, FirebaseError, UpdateDailyLogVariables>;
export function injectUpdateDailyLog(options?: UpdateDailyLogOptions, injector?: Injector): CreateDataConnectMutationResult<UpdateDailyLogData, UpdateDailyLogVariables, UpdateDailyLogVariables>;

type DeleteDailyLogOptions = DataConnectMutationOptionsUndefinedMutationFn<DeleteDailyLogData, FirebaseError, DeleteDailyLogVariables>;
export function injectDeleteDailyLog(options?: DeleteDailyLogOptions, injector?: Injector): CreateDataConnectMutationResult<DeleteDailyLogData, DeleteDailyLogVariables, DeleteDailyLogVariables>;

type GetDailyLogArgs = GetDailyLogVariables | (() => GetDailyLogVariables);
export type GetDailyLogOptions = () => Omit<CreateDataConnectQueryOptions<GetDailyLogData, GetDailyLogVariables>, 'queryFn'>;
export function injectGetDailyLog(args: GetDailyLogArgs, options?: GetDailyLogOptions, injector?: Injector): CreateDataConnectQueryResult<GetDailyLogData, GetDailyLogVariables>;

export type ListMyLogsOptions = () => Omit<CreateDataConnectQueryOptions<ListMyLogsData, undefined>, 'queryFn'>;
export function injectListMyLogs(options?: ListMyLogsOptions, injector?: Injector): CreateDataConnectQueryResult<ListMyLogsData, undefined>;

type InsertPredictionOptions = DataConnectMutationOptionsUndefinedMutationFn<InsertPredictionData, FirebaseError, InsertPredictionVariables>;
export function injectInsertPrediction(options?: InsertPredictionOptions, injector?: Injector): CreateDataConnectMutationResult<InsertPredictionData, InsertPredictionVariables, InsertPredictionVariables>;

type UpdatePredictionOptions = DataConnectMutationOptionsUndefinedMutationFn<UpdatePredictionData, FirebaseError, UpdatePredictionVariables>;
export function injectUpdatePrediction(options?: UpdatePredictionOptions, injector?: Injector): CreateDataConnectMutationResult<UpdatePredictionData, UpdatePredictionVariables, UpdatePredictionVariables>;

type DeletePredictionOptions = DataConnectMutationOptionsUndefinedMutationFn<DeletePredictionData, FirebaseError, DeletePredictionVariables>;
export function injectDeletePrediction(options?: DeletePredictionOptions, injector?: Injector): CreateDataConnectMutationResult<DeletePredictionData, DeletePredictionVariables, DeletePredictionVariables>;

type GetPredictionArgs = GetPredictionVariables | (() => GetPredictionVariables);
export type GetPredictionOptions = () => Omit<CreateDataConnectQueryOptions<GetPredictionData, GetPredictionVariables>, 'queryFn'>;
export function injectGetPrediction(args: GetPredictionArgs, options?: GetPredictionOptions, injector?: Injector): CreateDataConnectQueryResult<GetPredictionData, GetPredictionVariables>;

export type ListMyPredictionsOptions = () => Omit<CreateDataConnectQueryOptions<ListMyPredictionsData, undefined>, 'queryFn'>;
export function injectListMyPredictions(options?: ListMyPredictionsOptions, injector?: Injector): CreateDataConnectQueryResult<ListMyPredictionsData, undefined>;
