exports.id = "main";
exports.modules = {

/***/ "./src/controllers/usageRecordController.ts":
/*!**************************************************!*\
  !*** ./src/controllers/usageRecordController.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.updateUsageRecord = exports.addNewUsageRecord = exports.getCarUsageRecords = void 0;\nvar mockup_storage_1 = __webpack_require__(/*! ../items/mockup-storage */ \"./src/items/mockup-storage.ts\");\nvar getCarUsageRecords = function () { return __awaiter(void 0, void 0, void 0, function () {\n    var recordsList;\n    return __generator(this, function (_a) {\n        try {\n            recordsList = mockup_storage_1.carUsageRecords.map(function (record) {\n                var car = mockup_storage_1.cars.find(function (car) { return car.id === record.carId; });\n                var driver = mockup_storage_1.drivers.find(function (driver) { return driver.id === record.driverId; });\n                return {\n                    id: record.id,\n                    startedAd: record.startedAt,\n                    endedAt: record.endedAt,\n                    car: car,\n                    driver: driver,\n                    usageReason: record.usageReason\n                };\n            });\n            return [2 /*return*/, recordsList];\n        }\n        catch (error) {\n            throw new Error(error);\n        }\n        return [2 /*return*/];\n    });\n}); };\nexports.getCarUsageRecords = getCarUsageRecords;\nvar addNewUsageRecord = function (payload) { return __awaiter(void 0, void 0, void 0, function () {\n    var startedAt, driverId_1, carId_1, usageReason, carIndex, driverIndex;\n    return __generator(this, function (_a) {\n        try {\n            startedAt = payload.startedAt, driverId_1 = payload.driverId, carId_1 = payload.carId, usageReason = payload.usageReason;\n            carIndex = mockup_storage_1.cars.findIndex(function (car) { return car.id === carId_1; });\n            //if the findIndex javascript method doesn't find the index in the array, it returns -1.\n            if (carIndex === -1)\n                return [2 /*return*/, 'Carro não encontrado.'];\n            driverIndex = mockup_storage_1.drivers.findIndex(function (driver) { return driver.id === driverId_1; });\n            if (driverIndex === -1)\n                return [2 /*return*/, 'Motorista não encontrado'];\n            // Now checking whether said car is being used or if the driver already has a car assigned to them.\n            if (mockup_storage_1.cars[carIndex].taken === true) {\n                /*\n                  let driver: Driver | undefined = drivers.find((driver: Driver) => cars[carIndex].currentDriverId === driver.id);\n                   return `Este carro já está sendo utilizado pelo motorista ${driver?.name}`\n                 */\n                return [2 /*return*/, 'Veículo já sendo utilizado por um motorista.'];\n            }\n            if (mockup_storage_1.drivers[driverIndex].usingCar === true) {\n                /*\n                  let car : Car | undefined = cars.find((car:Car) => drivers[driverIndex].currentCarId === car.id );\n                    return `Este motorista já está utilizando o veículo placa ${car?.licensePlate}`\n                  \n                 */\n                return [2 /*return*/, 'Este motorista já está utilizando um veículo.'];\n            }\n            mockup_storage_1.cars[carIndex] = __assign(__assign({}, mockup_storage_1.cars[carIndex]), { taken: true });\n            mockup_storage_1.drivers[driverIndex] = __assign(__assign({}, mockup_storage_1.drivers[driverIndex]), { usingCar: true, currentCarId: carId_1 });\n            mockup_storage_1.carUsageRecords.push({\n                id: mockup_storage_1.carUsageRecords.length + 1,\n                startedAt: new Date(startedAt),\n                carId: carId_1,\n                driverId: driverId_1,\n                usageReason: usageReason\n            });\n            return [2 /*return*/, 'Registro criado!'];\n        }\n        catch (error) {\n            throw new Error(error);\n        }\n        return [2 /*return*/];\n    });\n}); };\nexports.addNewUsageRecord = addNewUsageRecord;\n/**\n * This method will be used to close an ongoing usage record.\n * @param id of the record to be updated\n * @param endDate the date that will be added to the record meaning the cycle is already completed.\n */\nvar updateUsageRecord = function (id, endDate) { return __awaiter(void 0, void 0, void 0, function () {\n    var recordIndex, usedCarIndex, driverIndex;\n    return __generator(this, function (_a) {\n        recordIndex = mockup_storage_1.carUsageRecords.findIndex(function (record) { return record.id === id; });\n        usedCarIndex = mockup_storage_1.cars.findIndex(function (car) { return mockup_storage_1.carUsageRecords[recordIndex].carId === car.id; });\n        driverIndex = mockup_storage_1.drivers.findIndex(function (driver) { return mockup_storage_1.carUsageRecords[recordIndex].driverId === driver.id; });\n        if (recordIndex != -1) {\n            if (!mockup_storage_1.carUsageRecords[recordIndex].endedAt) {\n                //Changing car and driver statuses and updating the record itself.\n                mockup_storage_1.carUsageRecords[recordIndex] = __assign(__assign({}, mockup_storage_1.carUsageRecords[recordIndex]), { endedAt: endDate });\n                mockup_storage_1.cars[usedCarIndex] = __assign(__assign({}, mockup_storage_1.cars[usedCarIndex]), { taken: false, currentDriverId: null });\n                mockup_storage_1.drivers[driverIndex] = __assign(__assign({}, mockup_storage_1.drivers[driverIndex]), { usingCar: false, currentCarId: null });\n            }\n            else {\n                return [2 /*return*/, \"Este registro já foi finalizado.\"];\n            }\n            return [2 /*return*/, 'Registro atualizado.'];\n        }\n        else {\n            return [2 /*return*/, 'Registro de utilização não encontrado.'];\n        }\n        return [2 /*return*/];\n    });\n}); };\nexports.updateUsageRecord = updateUsageRecord;\n\n\n//# sourceURL=webpack:///./src/controllers/usageRecordController.ts?");

/***/ })

};