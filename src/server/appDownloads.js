async function addAppDownload(downloadId, appId, userId) {
  await setDoc(doc(db, "AppDownloads", downloadId), {
    appId: appId,
    userId: userId,
    downloadDate: serverTimestamp(),
    lastModified: serverTimestamp(),
  });
}
