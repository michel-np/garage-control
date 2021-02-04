exports.id = "main";
exports.modules = {

/***/ "./src/items/mockup-storage.ts":
/*!*************************************!*\
  !*** ./src/items/mockup-storage.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.carUsageRecords = exports.drivers = exports.cars = void 0;\r\nexports.cars = [\r\n    {\r\n        id: 1,\r\n        manufacturer: 'VOLKSWAGEN',\r\n        color: 'Azul',\r\n        licensePlate: 'AAA-0000',\r\n        taken: false,\r\n        currentDriverId: null\r\n    },\r\n    {\r\n        id: 2,\r\n        manufacturer: 'FIAT',\r\n        color: 'Azul',\r\n        licensePlate: 'BBB-1111',\r\n        taken: false,\r\n        currentDriverId: null\r\n    },\r\n    {\r\n        id: 3,\r\n        manufacturer: 'FORD',\r\n        color: 'Azul',\r\n        licensePlate: 'CCC-2222',\r\n        taken: true,\r\n        currentDriverId: 3\r\n    },\r\n    {\r\n        id: 4,\r\n        manufacturer: 'CHEVROLET',\r\n        color: 'Azul',\r\n        licensePlate: 'DDD-3333',\r\n        taken: false,\r\n        currentDriverId: 2\r\n    },\r\n    {\r\n        id: 5,\r\n        manufacturer: 'PEUGEOT',\r\n        color: 'Azul',\r\n        licensePlate: 'EEE-4444',\r\n        taken: false,\r\n        currentDriverId: null\r\n    },\r\n    {\r\n        id: 6,\r\n        manufacturer: 'HYUNDAI',\r\n        color: 'Azul',\r\n        licensePlate: 'FFF-5555',\r\n        taken: false,\r\n        currentDriverId: null\r\n    },\r\n];\r\nexports.drivers = [\r\n    {\r\n        id: 1,\r\n        name: 'Sergio Augusto',\r\n        usingCar: false,\r\n        currentCarId: null\r\n    },\r\n    {\r\n        id: 2,\r\n        name: 'Paulo Ricardo',\r\n        usingCar: true,\r\n        currentCarId: 4\r\n    },\r\n    {\r\n        id: 3,\r\n        name: 'José Carlos',\r\n        usingCar: true,\r\n        currentCarId: 3\r\n    },\r\n    {\r\n        id: 4,\r\n        name: 'Sergio Augusto',\r\n        usingCar: false,\r\n        currentCarId: null\r\n    }\r\n];\r\nexports.carUsageRecords = [\r\n    {\r\n        id: 1,\r\n        startedAt: new Date(\"Fri Mar 20 2020 13:50:00 GMT-0300 (Horário Padrão de Brasília)\"),\r\n        endedAt: new Date(\"Wed Mar 25 2020 16:55:00 GMT-0300 (Horário Padrão de Brasília)\"),\r\n        driverId: 2,\r\n        carId: 1,\r\n        usageReason: \"Viagem\"\r\n    },\r\n    {\r\n        id: 2,\r\n        startedAt: new Date(\"Wed Apr 01 2020 10:34:00 GMT-0300 (Horário Padrão de Brasília)\"),\r\n        endedAt: new Date(\"Sat Apr 11 2020 17:00:00 GMT-0300 (Horário Padrão de Brasília)\"),\r\n        driverId: 4,\r\n        carId: 3,\r\n        usageReason: \"Frete\"\r\n    },\r\n    {\r\n        id: 3,\r\n        startedAt: new Date(\"Wed Apr 15 2020 10:34:00 GMT-0300 (Horário Padrão de Brasília)\"),\r\n        endedAt: new Date(\"Mon Apr 20 2020 12:00:00 GMT-0300 (Horário Padrão de Brasília)\"),\r\n        driverId: 3,\r\n        carId: 4,\r\n        usageReason: \"Emergência\"\r\n    },\r\n    {\r\n        id: 4,\r\n        startedAt: new Date(\"Wed May 20 2020 15:05:00 GMT-0300 (Horário Padrão de Brasília)\"),\r\n        endedAt: new Date(\"Wed May 27 2020 16:00:00 GMT-0300 (Horário Padrão de Brasília)\"),\r\n        driverId: 3,\r\n        carId: 6,\r\n        usageReason: \"Transporte\"\r\n    },\r\n    {\r\n        id: 5,\r\n        startedAt: new Date(\"Sat Jun 06 2020 17:00:00 GMT-0300 (Horário Padrão de Brasília)\"),\r\n        endedAt: new Date(\"Fri Jun 12 2020 14:00:00 GMT-0300 (Horário Padrão de Brasília)\"),\r\n        driverId: 1,\r\n        carId: 4,\r\n        usageReason: \"Emergência\"\r\n    },\r\n    {\r\n        id: 6,\r\n        startedAt: new Date(\"Fri Jul 03 2020 08:00:00 GMT-0300 (Horário Padrão de Brasília)\"),\r\n        endedAt: new Date(\"Wed Jul 15 2020 18:00:00 GMT-0300 (Horário Padrão de Brasília)\"),\r\n        driverId: 2,\r\n        carId: 3,\r\n        usageReason: \"Viagem\"\r\n    },\r\n    {\r\n        id: 7,\r\n        startedAt: new Date(\"Thu Jul 30 2020 12:00:00 GMT-0300 (Horário Padrão de Brasília)\"),\r\n        endedAt: new Date(\"Tue Aug 04 2020 14:45:00 GMT-0300 (Horário Padrão de Brasília)\"),\r\n        driverId: 4,\r\n        carId: 1,\r\n        usageReason: \"Levar à oficina mecânica\"\r\n    },\r\n];\r\n\n\n//# sourceURL=webpack:///./src/items/mockup-storage.ts?");

/***/ })

};