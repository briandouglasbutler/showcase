import sql from 'sql-template-strings'
import PGWrapper from '../../common/utils/pg-wrapper'

export async function drawings(userHandle) {
  const query = sql`select * from drawings;`

  const allDrawings = await PGWrapper.sqlAndMap(query, (row) => ({
    id: row.id,
    userHandle: row.user_handle,
    uploadDate: row.upload_date
  }))

  return allDrawings
}
