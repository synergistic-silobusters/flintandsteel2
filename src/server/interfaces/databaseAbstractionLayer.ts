/// <reference path="../../../typings/main.d.ts" />

import * as SchemaTypes from '../schemaTypes';
import { Db } from 'mongodb';
import { OperationStatus } from './operationStatus';

export interface DbOperationStatus extends OperationStatus {
    revisedDoc?: SchemaTypes.GenericDoc;
}

export interface DatabaseAbstractionLayer {
    connect(url: string): Promise<Db>;
    close(): Promise<DbOperationStatus>;

    // create
    create(docType: string, doc: SchemaTypes.GenericDoc): Promise<DbOperationStatus>;

    // read
    getAll(docType: string, fieldsToGet?: Array<string>): Promise<Array<SchemaTypes.GenericDoc>>;
    findOne(docType: string, query: Object): Promise<SchemaTypes.GenericDoc>;

    // update
    updateDoc(docType: string, fieldsToUpdate: Object): Promise<DbOperationStatus>;
    setEmbedded(docType: string, ObjToUpdate: Object): Promise<DbOperationStatus>;
    push(docType: string, ObjTOAdd: Object): Promise<DbOperationStatus>;

    // delete
    deleteDoc(docType: string, docId: string): Promise<DbOperationStatus>;
    unsetEmbedded(docType: string, ObjRef: Object): Promise<DbOperationStatus>;
    pull(docType: string, ObjToRemove: Object): Promise<DbOperationStatus>;
}
