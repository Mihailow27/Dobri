async function addAppReview(reviewId, appId, userId, review, rating) {
  await setDoc(doc(db, "AppReviews", reviewId), {
    appId: appId,
    userId: userId,
    review: review,
    rating: rating,
    lastModified: serverTimestamp(),
  });
}
