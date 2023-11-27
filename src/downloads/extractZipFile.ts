import AdmZip from 'adm-zip';

export const extractZipFile = (): void => {
  const zip = new AdmZip('github-export/attempt.zip');
  zip.extractAllTo('github-export', true);
};
