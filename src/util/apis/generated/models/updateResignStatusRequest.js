/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Updates the status of the resign request
 *
 */
class UpdateResignStatusRequest {
  /**
   * Create a UpdateResignStatusRequest.
   * @member {string} status The updated status for the resigning request.
   * @member {string} [errorCode] Error code if an error occured in the
   * resigning operation.
   * @member {string} [errorMessage] Error message if an error occured in the
   * resigning operation.
   */
  constructor() {
  }

  /**
   * Defines the metadata of UpdateResignStatusRequest
   *
   * @returns {object} metadata of UpdateResignStatusRequest
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'UpdateResignStatusRequest',
      type: {
        name: 'Composite',
        className: 'UpdateResignStatusRequest',
        modelProperties: {
          status: {
            required: true,
            serializedName: 'status',
            type: {
              name: 'String'
            }
          },
          errorCode: {
            required: false,
            serializedName: 'error_code',
            type: {
              name: 'String'
            }
          },
          errorMessage: {
            required: false,
            serializedName: 'error_message',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = UpdateResignStatusRequest;
