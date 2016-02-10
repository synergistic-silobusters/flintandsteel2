import { Router } from 'express';

import { OperationStatus } from './operationStatus';
import { GenericDoc } from '../schemaTypes';

export interface BoOperationStatus extends OperationStatus {
    data: GenericDoc;
}

export interface PatchOperation {
    operation: string;
    path: string;
    value?: string;
}

export interface BusinessObject {
    (boType: GenericDoc);
    router: Router;
    get(docId: string): Promise<BoOperationStatus>;
    post(doc: Object): Promise<BoOperationStatus>;
    patch(patchOps: Array<PatchOperation>): Promise<BoOperationStatus>;
    delete(doc: Object): Promise<BoOperationStatus>;
}
