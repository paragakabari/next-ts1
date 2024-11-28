import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const team = [
    {
      name: 'Abhishek Gupta',
      role: '마케팅 - 2y+',
      flag: '🇨🇴',
      skills: [
        '마케팅 콘텐츠 제작',
        '인스타그램 관리',
        '트위터 관리',
        '블로그 글 작성',
      ],
    },
    {
      name: 'Khen Cahyo',
      role: '해외 CS - 3y+',
      flag: '🇮🇩',
      skills: [
        '고객 지원',
        '제품 문의 응답',
        '현지 언어 번역',
        '서비스 최적화',
      ],
    },
  ];

  res.status(200).json(team);
}
