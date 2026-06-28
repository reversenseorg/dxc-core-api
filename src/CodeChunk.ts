/*
 *     Reversense platform / dxc-core-api :  Reversense is an automated reverse engineering and analysis platform
 *     focused on security, privacy, quality, accessibility and safety assessment of software, including mobile app and firmware.
 *     Copyright (C) 2026  Reversense SAS
 *
 *     This program is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU Affero General Public License as published
 *     by the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     This program is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU Affero General Public License for more details.
 *
 *     You should have received a copy of the GNU Affero General Public License
 *     along with this program.  If not, see <https://www.gnu.org/licenses/>.
 *
 */

import {NodeInternalType} from "./NodeInternalType.js";
import {Metadata} from "./Metadata.js";


export interface INodeRef {
    __:NodeInternalType;
    _uid?:any;
    tags?:number[];
    //getUID():string;
}

export interface CodeExtract<T> {
    ref: INodeRef,
    parent?: T,
    data: T
}

export interface CodeChunk<T> {
    oid: string,
    aid: string,
    /**
     * Extended Package ULR (epurl)
     * It is package url extended to any source of binary including app stores and tools such as xDR
     * @field
     */
    epurl: string,
    metadata?: Metadata[],
    tags?: string[],
    data: CodeExtract<T>[]
}