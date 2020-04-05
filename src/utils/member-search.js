export function mapTagToLeaderboardType(tagDomain) {
  const tagToLeaderboardTypeMap = {
    SKILLS: 'MEMBER_SKILL',
  };

  return tagDomain ? tagToLeaderboardTypeMap[tagDomain.toUpperCase()] : null;
}

export async function checkResponseSucess(res) {
  if (!res.ok) {
    throw new Error(res.statusText);
  }
  const x = await res.json();
  if (!x.result.success) {
    throw new Error(x.result.content);
  }
  return x;
}
