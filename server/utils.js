export const HasDogUpdateData = (request) => {
  return (
    request.body.status ||
    request.body.gender ||
    request.body.pictureUrl ||
    request.body.rating ||
    request.body.pinned ||
    request.body.recent ||
    request.body.tags
  )
}
