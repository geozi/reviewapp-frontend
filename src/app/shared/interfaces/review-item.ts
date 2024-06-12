/**
 * Represents a review that is already persisted.
 * @property {string} id - The id of the review record.
 * @property {username} username - The username of the user adding the review.
 * @property {string} subject - The subject of the review.
 * @property {string} description - The main body of the review.
 * @property {Date} created - The date the review was added.
 * @author geozi
 * @version 1
 */
export interface ReviewItem {
  id: string;
  username: string;
  subject: string;
  description: string;
  created: Date;
}
