/**
 * This module is responsible for persisting the count of views on the creation page.
 *
 * Basically, we have an object where each key corresponds to the creation's id and the value
 * represents the quantity of views on the page. The MMKV storage is used to persist this object.
 *
 */

import { MMKV } from 'react-native-mmkv';
import { z } from 'zod';

type TCreationVisits = { [key: string]: number };

const creationIdScheme = z.union([z.string().nonempty(), z.number()]);

export class CreationVisitsStorage {
  private storageKey = 'CREATION_VISITS';
  private storage: MMKV;

  constructor() {
    this.storage = new MMKV();
  }

  /**
   * Get information about the visits on the creation pages.
   *
   * @memberOf CreationVisitsStorage
   * @returns {Object} Returns the creation visits
   */
  get creationVisits(): TCreationVisits {
    try {
      const jsonCreationVisits = this.storage.getString(this.storageKey);
      return JSON.parse(jsonCreationVisits || '{}');
    } catch (error) {
      return {};
    }
  }

  /**
   * Increase the count of visits to a creation page
   *
   * @memberOf CreationVisitsStorage
   * @param {number | string} id The creation's id
   * @returns {number} Returns the current quantity of vistis.
   */
  increaseVisitCount(id: number | string): number {
    const result = creationIdScheme.safeParse(id);

    if (!result.success) {
      throw new Error('Invalid id');
    }

    const value = this.creationVisits[id] ? this.creationVisits[id] + 1 : 1;
    const data = JSON.stringify({ ...this.creationVisits, [id]: value });

    this.storage.set(this.storageKey, data);

    return value;
  }
}
