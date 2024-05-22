async function addMobileApp(appId, name, developer, version) {
  await setDoc(doc(db, "MobileApps", appId), {
    name: name,
    developer: developer,
    version: version,
    lastModified: serverTimestamp(),
  });
}
