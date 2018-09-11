import { drawings } from '../repositories/drawings'

export async function getDrawings() {
    const allDrawings = await drawings()
    return allDrawings
}

