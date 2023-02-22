import CONSTANTS from './constants'
export const projectDetails = () => {
  const {SANITY_PROJECT_ID, SANITY_DATASET, SANITY_API_VERSION} =
    typeof document === 'undefined' ? process.env : CONSTANTS

  return {
    projectId: SANITY_PROJECT_ID ?? `yn3xdsqf`,
    dataset: SANITY_DATASET ?? `production`,
    apiVersion: SANITY_API_VERSION ?? `2023-02-07`,
  }
}
