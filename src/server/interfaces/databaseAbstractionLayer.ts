/// <reference path="../../../typings/main.d.ts" />

import * as SchemaTypes from './schemaTypes';
import { Db } from 'mongodb';

export interface OperationStatus {
    status: number;
    message: string;
    revisedDoc?: SchemaTypes.GenericDoc;
}

export interface DatabaseAbstractionLayer {
    connect(url: string): Promise<Db>;
    close();

    // create
    create(docType: string, doc: SchemaTypes.GenericDoc): Promise<OperationStatus>;

    // read
    getAll(docType: string, fieldsToGet?: Array<string>): Promise<Array<SchemaTypes.GenericDoc>>;
    findOne(docType: string, query: Object): Promise<SchemaTypes.GenericDoc>;

    // update
    updateDoc(docType: string, fieldsToUpdate: Object): Promise<OperationStatus>;
    setEmbedded(docType: string, ObjToUpdate: Object): Promise<OperationStatus>;
    push(docType: string, ObjTOAdd: Object): Promise<OperationStatus>;

    // delete
    deleteDoc(docType: string, docId: string): Promise<OperationStatus>;
    unsetEmbedded(docType: string, ObjRef: Object): Promise<OperationStatus>;
    pull(docType: string, ObjToRemove: Object): Promise<OperationStatus>;
}
