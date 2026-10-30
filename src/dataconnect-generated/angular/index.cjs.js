const { createUserDataRef, updateUserProfileRef, deleteCycleRef, getCycleRef, listMyCyclesRef, createDailyLogRef, updateDailyLogRef, deleteDailyLogRef, getDailyLogRef, listMyLogsRef, insertPredictionRef, updatePredictionRef, deletePredictionRef, getPredictionRef, listMyPredictionsRef } = require('../');
const { DataConnect, CallerSdkTypeEnum } = require('@angular/fire/data-connect');
const { injectDataConnectQuery, injectDataConnectMutation } = require('@tanstack-query-firebase/angular/data-connect');
const { inject, EnvironmentInjector } = require('@angular/core');

exports.injectCreateUserData = function injectCreateUserData(args, injector) {
  return injectDataConnectMutation(createUserDataRef, args, injector, CallerSdkTypeEnum.GeneratedAngular);
}

exports.injectUpdateUserProfile = function injectUpdateUserProfile(args, injector) {
  return injectDataConnectMutation(updateUserProfileRef, args, injector, CallerSdkTypeEnum.GeneratedAngular);
}

exports.injectDeleteCycle = function injectDeleteCycle(args, injector) {
  return injectDataConnectMutation(deleteCycleRef, args, injector, CallerSdkTypeEnum.GeneratedAngular);
}

exports.injectGetCycle = function injectGetCycle(args, options, injector) {
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

exports.injectListMyCycles = function injectListMyCycles(options, injector) {
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

exports.injectCreateDailyLog = function injectCreateDailyLog(args, injector) {
  return injectDataConnectMutation(createDailyLogRef, args, injector, CallerSdkTypeEnum.GeneratedAngular);
}

exports.injectUpdateDailyLog = function injectUpdateDailyLog(args, injector) {
  return injectDataConnectMutation(updateDailyLogRef, args, injector, CallerSdkTypeEnum.GeneratedAngular);
}

exports.injectDeleteDailyLog = function injectDeleteDailyLog(args, injector) {
  return injectDataConnectMutation(deleteDailyLogRef, args, injector, CallerSdkTypeEnum.GeneratedAngular);
}

exports.injectGetDailyLog = function injectGetDailyLog(args, options, injector) {
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

exports.injectListMyLogs = function injectListMyLogs(options, injector) {
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

exports.injectInsertPrediction = function injectInsertPrediction(args, injector) {
  return injectDataConnectMutation(insertPredictionRef, args, injector, CallerSdkTypeEnum.GeneratedAngular);
}

exports.injectUpdatePrediction = function injectUpdatePrediction(args, injector) {
  return injectDataConnectMutation(updatePredictionRef, args, injector, CallerSdkTypeEnum.GeneratedAngular);
}

exports.injectDeletePrediction = function injectDeletePrediction(args, injector) {
  return injectDataConnectMutation(deletePredictionRef, args, injector, CallerSdkTypeEnum.GeneratedAngular);
}

exports.injectGetPrediction = function injectGetPrediction(args, options, injector) {
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

exports.injectListMyPredictions = function injectListMyPredictions(options, injector) {
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

