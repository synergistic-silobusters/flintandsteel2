/// <reference path="../../../typings/main.d.ts" />

import * as SchemaTypes from './schemaTypes';

export interface DatabaseAbstractionLayer {
    connect(url: string);
}
