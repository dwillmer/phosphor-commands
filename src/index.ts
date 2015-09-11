/*-----------------------------------------------------------------------------
| Copyright (c) 2014-2015, PhosphorJS Contributors
|
| Distributed under the terms of the BSD 3-Clause License.
|
| The full license is in the file LICENSE, distributed with this software.
|----------------------------------------------------------------------------*/
'use strict';


interface ICommand {
  /**
   *
   */
  enabledChanged: ISignal<ICommand, boolean>;

  /**
   * read-only
   */
  id: string;

  /**
   *
   */
  enabled: boolean;

  /**
   *
   */
  invoke(args?: any): void;
}
