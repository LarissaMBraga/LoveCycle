const { queryRef, executeQuery, validateArgsWithOptions, mutationRef, executeMutation, validateArgs, makeMemoryCacheProvider } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'lovecycle',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;
const dataConnectSettings = {
  cacheSettings: {
    cacheProvider: makeMemoryCacheProvider()
  }
};
exports.dataConnectSettings = dataConnectSettings;

const createUserDataRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateUserData');
}
createUserDataRef.operationName = 'CreateUserData';
exports.createUserDataRef = createUserDataRef;

exports.createUserData = function createUserData(dc) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dc, undefined);
  return executeMutation(createUserDataRef(dcInstance, inputVars));
}
;

const updateUserProfileRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateUserProfile');
}
updateUserProfileRef.operationName = 'UpdateUserProfile';
exports.updateUserProfileRef = updateUserProfileRef;

exports.updateUserProfile = function updateUserProfile(dc) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dc, undefined);
  return executeMutation(updateUserProfileRef(dcInstance, inputVars));
}
;

const deleteCycleRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteCycle', inputVars);
}
deleteCycleRef.operationName = 'DeleteCycle';
exports.deleteCycleRef = deleteCycleRef;

exports.deleteCycle = function deleteCycle(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(deleteCycleRef(dcInstance, inputVars));
}
;

const getCycleRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetCycle', inputVars);
}
getCycleRef.operationName = 'GetCycle';
exports.getCycleRef = getCycleRef;

exports.getCycle = function getCycle(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getCycleRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const listMyCyclesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListMyCycles');
}
listMyCyclesRef.operationName = 'ListMyCycles';
exports.listMyCyclesRef = listMyCyclesRef;

exports.listMyCycles = function listMyCycles(dcOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrOptions, options, undefined,false, false);
  return executeQuery(listMyCyclesRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const createDailyLogRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateDailyLog', inputVars);
}
createDailyLogRef.operationName = 'CreateDailyLog';
exports.createDailyLogRef = createDailyLogRef;

exports.createDailyLog = function createDailyLog(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(createDailyLogRef(dcInstance, inputVars));
}
;

const updateDailyLogRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateDailyLog', inputVars);
}
updateDailyLogRef.operationName = 'UpdateDailyLog';
exports.updateDailyLogRef = updateDailyLogRef;

exports.updateDailyLog = function updateDailyLog(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(updateDailyLogRef(dcInstance, inputVars));
}
;

const deleteDailyLogRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeleteDailyLog', inputVars);
}
deleteDailyLogRef.operationName = 'DeleteDailyLog';
exports.deleteDailyLogRef = deleteDailyLogRef;

exports.deleteDailyLog = function deleteDailyLog(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(deleteDailyLogRef(dcInstance, inputVars));
}
;

const getDailyLogRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetDailyLog', inputVars);
}
getDailyLogRef.operationName = 'GetDailyLog';
exports.getDailyLogRef = getDailyLogRef;

exports.getDailyLog = function getDailyLog(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getDailyLogRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const listMyLogsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListMyLogs');
}
listMyLogsRef.operationName = 'ListMyLogs';
exports.listMyLogsRef = listMyLogsRef;

exports.listMyLogs = function listMyLogs(dcOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrOptions, options, undefined,false, false);
  return executeQuery(listMyLogsRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const insertPredictionRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'InsertPrediction', inputVars);
}
insertPredictionRef.operationName = 'InsertPrediction';
exports.insertPredictionRef = insertPredictionRef;

exports.insertPrediction = function insertPrediction(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(insertPredictionRef(dcInstance, inputVars));
}
;

const updatePredictionRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdatePrediction', inputVars);
}
updatePredictionRef.operationName = 'UpdatePrediction';
exports.updatePredictionRef = updatePredictionRef;

exports.updatePrediction = function updatePrediction(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(updatePredictionRef(dcInstance, inputVars));
}
;

const deletePredictionRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'DeletePrediction', inputVars);
}
deletePredictionRef.operationName = 'DeletePrediction';
exports.deletePredictionRef = deletePredictionRef;

exports.deletePrediction = function deletePrediction(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true);
  return executeMutation(deletePredictionRef(dcInstance, inputVars));
}
;

const getPredictionRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetPrediction', inputVars);
}
getPredictionRef.operationName = 'GetPrediction';
exports.getPredictionRef = getPredictionRef;

exports.getPrediction = function getPrediction(dcOrVars, varsOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrVars, varsOrOptions, options, true, true);
  return executeQuery(getPredictionRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;

const listMyPredictionsRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListMyPredictions');
}
listMyPredictionsRef.operationName = 'ListMyPredictions';
exports.listMyPredictionsRef = listMyPredictionsRef;

exports.listMyPredictions = function listMyPredictions(dcOrOptions, options) {
  
  const { dc: dcInstance, vars: inputVars, options: inputOpts } = validateArgsWithOptions(connectorConfig, dcOrOptions, options, undefined,false, false);
  return executeQuery(listMyPredictionsRef(dcInstance, inputVars), inputOpts && { fetchPolicy: inputOpts.fetchPolicy });
}
;
