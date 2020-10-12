/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   app-localstorage/app-localstorage-document.html
 */

/// <reference path="../app-storage-behavior.d.ts" />
/// <reference path="../../polymer/types/polymer.d.ts" />

/**
 * app-localstorage-document synchronizes storage between an in-memory
 * value and a location in the browser's localStorage system.
 *
 * localStorage is a simple and widely supported storage API that provides both
 * permanent and session-based storage options. Using app-localstorage-document
 * you can easily integrate localStorage into your app via normal Polymer
 * databinding.
 *
 * app-localstorage-document is the reference implementation of an element
 * that uses `AppStorageBehavior`. Reading its code is a good way to get
 * started writing your own storage element.
 *
 * Example use:
 *
 *     <paper-input value="{{search}}"></paper-input>
 *     <app-localstorage-document key="search" data="{{search}}">
 *     </app-localstorage-document>
 *
 * app-localstorage-document automatically synchronizes changes to the
 * same key across multiple tabs.
 *
 * Only supports storing JSON-serializable values.
 */
interface AppLocalstorageDocumentElement extends Polymer.Element, Polymer.AppStorageBehavior {
  readonly isNew: any;

  /**
   * Defines the logical location to store the data.
   */
  key: String|null;

  /**
   * If true, the data will automatically be cleared from storage when
   * the page session ends (i.e. when the user has navigated away from
   * the page).
   */
  sessionOnly: boolean|null|undefined;

  /**
   * Either `window.localStorage` or `window.sessionStorage`, depending on
   * `this.sessionOnly`.
   */
  readonly storage: object|null|undefined;

  /**
   * Stores a value at the given key, and if successful, updates this.key.
   *
   * @param key The new key to use.
   */
  saveValue(key: any): Promise<any>|null;
  reset(): void;
  destroy(): any;
  getStoredValue(path: any): any;
  setStoredValue(path: any, value: any): any;
  attached(): void;
  detached(): void;
}

interface HTMLElementTagNameMap {
  "app-localstorage-document": AppLocalstorageDocumentElement;
}
