import { createUserDataRef, updateUserProfileRef, deleteCycleRef, getCycleRef, listMyCyclesRef, createDailyLogRef, updateDailyLogRef, deleteDailyLogRef, getDailyLogRef, listMyLogsRef, insertPredictionRef, updatePredictionRef, deletePredictionRef, getPredictionRef, listMyPredictionsRef } from '../../';
import { DataConnect, CallerSdkTypeEnum } from '@angular/fire/data-connect';
import { injectDataConnectQuery, injectDataConnectMutation } from '@tanstack-query-firebase/angular/data-connect';
import { inject, EnvironmentInjector } from '@angular/core';
export function injectCreateUserData(args, injector) {
  return injectDataConnectMutation(createUserDataRef, args, injector, CallerSdkTypeEnum.GeneratedAngular);
}

export function injectUpdateUserProfile(args, injector) {
  return injectDataConnectMutation(updateUserProfileRef, args, injector, CallerSdkTypeEnum.GeneratedAngular);
}

export function injectDeleteCycle(args, injector) {
  return injectDataConnectMutation(deleteCycleRef, args, injector, CallerSdkTypeEnum.GeneratedAngular);
}

export function injectGetCycle(args, options, injector) {
  const finalInjector = injector || inject(EnvironmentInjector);
  const dc = finalInjector.get(DataConnect);
  const varsFactoryFn = (typeof args === 'function') ? args : () => args;
  return injectDataConnectQuery(() => {
    const addOpn = options && options();
    return {
      queryFn: () =>  getCycleRef(dc, varsFactoryFn()),
      ...addOpn
    };
  }, finalInjector, CallerSdkTypeEnum.GeneratedAngular);
}

export function injectListMyCycles(options, injector) {
  const finalInjector = injector || inject(EnvironmentInjector);
  const dc = finalInjector.get(DataConnect);
  return injectDataConnectQuery(() => {
    const addOpn = options && options();
    return {
      queryFn: () =>  listMyCyclesRef(dc),
      ...addOpn
    };
  }, finalInjector, CallerSdkTypeEnum.GeneratedAngular);
}

export function injectCreateDailyLog(args, injector) {
  return injectDataConnectMutation(createDailyLogRef, args, injector, CallerSdkTypeEnum.GeneratedAngular);
}

export function injectUpdateDailyLog(args, injector) {
  return injectDataConnectMutation(updateDailyLogRef, args, injector, CallerSdkTypeEnum.GeneratedAngular);
}

export function injectDeleteDailyLog(args, injector) {
  return injectDataConnectMutation(deleteDailyLogRef, args, injector, CallerSdkTypeEnum.GeneratedAngular);
}

export function injectGetDailyLog(args, options, injector) {
  const finalInjector = injector || inject(EnvironmentInjector);
  const dc = finalInjector.get(DataConnect);
  const varsFactoryFn = (typeof args === 'function') ? args : () => args;
  return injectDataConnectQuery(() => {
    const addOpn = options && options();
    return {
      queryFn: () =>  getDailyLogRef(dc, varsFactoryFn()),
      ...addOpn
    };
  }, finalInjector, CallerSdkTypeEnum.GeneratedAngular);
}

export function injectListMyLogs(options, injector) {
  const finalInjector = injector || inject(EnvironmentInjector);
  const dc = finalInjector.get(DataConnect);
  return injectDataConnectQuery(() => {
    const addOpn = options && options();
    return {
      queryFn: () =>  listMyLogsRef(dc),
      ...addOpn
    };
  }, finalInjector, CallerSdkTypeEnum.GeneratedAngular);
}

export function injectInsertPrediction(args, injector) {
  return injectDataConnectMutation(insertPredictionRef, args, injector, CallerSdkTypeEnum.GeneratedAngular);
}

export function injectUpdatePrediction(args, injector) {
  return injectDataConnectMutation(updatePredictionRef, args, injector, CallerSdkTypeEnum.GeneratedAngular);
}

export function injectDeletePrediction(args, injector) {
  return injectDataConnectMutation(deletePredictionRef, args, injector, CallerSdkTypeEnum.GeneratedAngular);
}

export function injectGetPrediction(args, options, injector) {
  const finalInjector = injector || inject(EnvironmentInjector);
  const dc = finalInjector.get(DataConnect);
  const varsFactoryFn = (typeof args === 'function') ? args : () => args;
  return injectDataConnectQuery(() => {
    const addOpn = options && options();
    return {
      queryFn: () =>  getPredictionRef(dc, varsFactoryFn()),
      ...addOpn
    };
  }, finalInjector, CallerSdkTypeEnum.GeneratedAngular);
}

export function injectListMyPredictions(options, injector) {
  const finalInjector = injector || inject(EnvironmentInjector);
  const dc = finalInjector.get(DataConnect);
  return injectDataConnectQuery(() => {
    const addOpn = options && options();
    return {
      queryFn: () =>  listMyPredictionsRef(dc),
      ...addOpn
    };
  }, finalInjector, CallerSdkTypeEnum.GeneratedAngular);
}

