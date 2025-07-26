export interface SubjectLink {
  title: string;
  url: string;
  description?: string;
}

export interface ChapterData {
  chapterNumber: number;
  chapterName: string;
  notes?: SubjectLink[];
  classes?: SubjectLink[];
}

export interface SubjectUrls {
  syllabus?: string;
  markedBooks?: string;
  chapterClasses?: string;
  chapterNotes?: string;
}

export interface SubjectData {
  id: string;
  name: string;
  mainSubject: string;
  paper: string;
  syllabus?: SubjectLink[];
  markedBooks?: SubjectLink[];
  chapters?: ChapterData[];
  urls?: SubjectUrls;
}

export const subjectDatabase: Record<string, SubjectData> = {
  bangla_1st: {
    id: 'bangla_1st',
    name: 'Bangla 1st Paper',
    mainSubject: 'Bangla',
    paper: '1st Paper',
    urls: {
      syllabus: 'https://drive.google.com/drive/folders/11rV948jnux8vdGuLqM02pUndlPgZ0jEz',
      markedBooks: 'https://drive.google.com/drive/folders/11wML_1PpGz00c_o-K5TVQlkozQD6eoV2',
      chapterClasses: 'https://youtube.com/playlist?list=PLuaHF6yUT-71U1rzdYwvMJWsJYhRpzG80&feature=shared',
      chapterNotes: 'https://drive.google.com/drive/folders/126OdgzmvuFcC1AZDlfd0D4kGH83lozaZ',
    },
  },

  bangla_2nd: {
    id: 'bangla_2nd',
    name: 'Bangla 2nd Paper',
    mainSubject: 'Bangla',
    paper: '2nd Paper',
    urls: {
      syllabus: 'https://drive.google.com/drive/folders/11rV948jnux8vdGuLqM02pUndlPgZ0jEz',
      markedBooks: 'https://drive.google.com/drive/folders/11wML_1PpGz00c_o-K5TVQlkozQD6eoV2',
      chapterClasses: 'https://youtube.com/playlist?list=PLrRT7z4vncw_dQRdqagT2VF4BMI3Xmjni&feature=shared',
      chapterNotes: 'https://drive.google.com/drive/folders/126OdgzmvuFcC1AZDlfd0D4kGH83lozaZ',
    },
  },

  english_1st: {
    id: 'english_1st',
    name: 'English 1st Paper',
    mainSubject: 'English',
    paper: '1st Paper',
    urls: {
      syllabus: 'https://drive.google.com/drive/folders/11rV948jnux8vdGuLqM02pUndlPgZ0jEz',
      markedBooks: 'https://drive.google.com/drive/folders/11wML_1PpGz00c_o-K5TVQlkozQD6eoV2',
      chapterClasses: 'https://youtube.com/playlist?list=PLuaHF6yUT-724gXv7eFMjL4yKd4JaOrfg&feature=shared',
      chapterNotes: 'https://drive.google.com/drive/folders/126OdgzmvuFcC1AZDlfd0D4kGH83lozaZ',
    },
  },

  english_2nd: {
    id: 'english_2nd',
    name: 'English 2nd Paper',
    mainSubject: 'English',
    paper: '2nd Paper',
    urls: {
      syllabus: 'https://drive.google.com/drive/folders/11rV948jnux8vdGuLqM02pUndlPgZ0jEz',
      markedBooks: 'https://drive.google.com/drive/folders/11wML_1PpGz00c_o-K5TVQlkozQD6eoV2',
      chapterClasses: 'https://youtube.com/playlist?list=PLeGMaVlcG3z6SWbsvjLJoTBFfalM5ati8&feature=shared',
      chapterNotes: 'https://drive.google.com/drive/folders/126OdgzmvuFcC1AZDlfd0D4kGH83lozaZ',
    },
  },

  ict: {
    id: 'ict',
    name: 'ICT',
    mainSubject: 'ICT',
    paper: '',
    urls: {
      syllabus: 'https://drive.google.com/drive/folders/11rV948jnux8vdGuLqM02pUndlPgZ0jEz',
      markedBooks: 'https://drive.google.com/drive/folders/11wML_1PpGz00c_o-K5TVQlkozQD6eoV2',
      chapterClasses: 'https://youtube.com/playlist?list=PLJJqNbHzTfgYH0P8g3RA6CUDi6fyZztXP&feature=shared',
      chapterNotes: 'https://drive.google.com/drive/folders/126OdgzmvuFcC1AZDlfd0D4kGH83lozaZ',
    },
  },

  physics_1st: {
    id: 'physics_1st',
    name: 'Physics 1st Paper',
    mainSubject: 'Physics',
    paper: '1st Paper',
    urls: {
      syllabus: 'https://drive.google.com/drive/folders/11rV948jnux8vdGuLqM02pUndlPgZ0jEz',
      markedBooks: 'https://drive.google.com/drive/folders/11wML_1PpGz00c_o-K5TVQlkozQD6eoV2',
      chapterClasses: 'https://youtube.com/playlist?list=PLuv5X6bIrbrEOQUkjmdDP1q41nJWYNh4r&feature=shared',
      chapterNotes: 'https://drive.google.com/drive/folders/126OdgzmvuFcC1AZDlfd0D4kGH83lozaZ',
    },
  },

  physics_2nd: {
    id: 'physics_2nd',
    name: 'Physics 2nd Paper',
    mainSubject: 'Physics',
    paper: '2nd Paper',
    urls: {
      syllabus: 'https://drive.google.com/drive/folders/11rV948jnux8vdGuLqM02pUndlPgZ0jEz',
      markedBooks: 'https://drive.google.com/drive/folders/11wML_1PpGz00c_o-K5TVQlkozQD6eoV2',
      chapterClasses: 'https://youtube.com/playlist?list=PLuv5X6bIrbrH2aqZ2WWQ2-pVsGX-yrgaF&feature=shared',
      chapterNotes: 'https://drive.google.com/drive/folders/126OdgzmvuFcC1AZDlfd0D4kGH83lozaZ',
    },
  },

  chemistry_1st: {
    id: 'chemistry_1st',
    name: 'Chemistry 1st Paper',
    mainSubject: 'Chemistry',
    paper: '1st Paper',
    urls: {
      syllabus: 'https://drive.google.com/drive/folders/11rV948jnux8vdGuLqM02pUndlPgZ0jEz',
      markedBooks: 'https://drive.google.com/drive/folders/11wML_1PpGz00c_o-K5TVQlkozQD6eoV2',
      chapterClasses: 'https://youtube.com/playlist?list=PLuv5X6bIrbrEYwziN6bLO1d2kb240Uyiq&feature=shared',
      chapterNotes: 'https://drive.google.com/drive/folders/126OdgzmvuFcC1AZDlfd0D4kGH83lozaZ',
    },
  },

  chemistry_2nd: {
    id: 'chemistry_2nd',
    name: 'Chemistry 2nd Paper',
    mainSubject: 'Chemistry',
    paper: '2nd Paper',
    urls: {
      syllabus: 'https://drive.google.com/drive/folders/11rV948jnux8vdGuLqM02pUndlPgZ0jEz',
      markedBooks: 'https://drive.google.com/drive/folders/11wML_1PpGz00c_o-K5TVQlkozQD6eoV2',
      chapterClasses: 'https://youtube.com/playlist?list=PLuv5X6bIrbrHMz5lxcm_4pQIi00JmVHmc&feature=shared',
      chapterNotes: 'https://drive.google.com/drive/folders/126OdgzmvuFcC1AZDlfd0D4kGH83lozaZ',
    },
  },

  biology_1st: {
    id: 'biology_1st',
    name: 'Biology 1st Paper',
    mainSubject: 'Biology',
    paper: '1st Paper',
    urls: {
      syllabus: 'https://drive.google.com/drive/folders/11rV948jnux8vdGuLqM02pUndlPgZ0jEz',
      markedBooks: 'https://drive.google.com/drive/folders/11wML_1PpGz00c_o-K5TVQlkozQD6eoV2',
      chapterClasses: 'https://youtube.com/playlist?list=PLoYieD8GCtx_IMSAx9saIg82UHxNH-pLm&feature=shared',
      chapterNotes: 'https://drive.google.com/drive/folders/126OdgzmvuFcC1AZDlfd0D4kGH83lozaZ',
    },
  },

  biology_2nd: {
    id: 'biology_2nd',
    name: 'Biology 2nd Paper',
    mainSubject: 'Biology',
    paper: '2nd Paper',
    urls: {
      syllabus: 'https://drive.google.com/drive/folders/11rV948jnux8vdGuLqM02pUndlPgZ0jEz',
      markedBooks: 'https://drive.google.com/drive/folders/11wML_1PpGz00c_o-K5TVQlkozQD6eoV2',
      chapterClasses: 'https://youtube.com/playlist?list=PLoYieD8GCtx_IMSAx9saIg82UHxNH-pLm&feature=shared',
      chapterNotes: 'https://drive.google.com/drive/folders/126OdgzmvuFcC1AZDlfd0D4kGH83lozaZ',
    },
  },

  higher_math_1st: {
    id: 'higher_math_1st',
    name: 'Higher Math 1st Paper',
    mainSubject: 'Higher Math',
    paper: '1st Paper',
    urls: {
      syllabus: 'https://drive.google.com/drive/folders/11rV948jnux8vdGuLqM02pUndlPgZ0jEz',
      markedBooks: 'https://drive.google.com/drive/folders/11wML_1PpGz00c_o-K5TVQlkozQD6eoV2',
      chapterClasses: 'https://youtube.com/playlist?list=PLuaHF6yUT-71U1rzdYwvMJWsJYhRpzG80&feature=shared',
      chapterNotes: 'https://drive.google.com/drive/folders/126OdgzmvuFcC1AZDlfd0D4kGH83lozaZ',
    },
  },

  higher_math_2nd: {
    id: 'higher_math_2nd',
    name: 'Higher Math 2nd Paper',
    mainSubject: 'Higher Math',
    paper: '2nd Paper',
    urls: {
      syllabus: 'https://drive.google.com/drive/folders/11rV948jnux8vdGuLqM02pUndlPgZ0jEz',
      markedBooks: 'https://drive.google.com/drive/folders/11wML_1PpGz00c_o-K5TVQlkozQD6eoV2',
      chapterClasses: 'https://youtube.com/playlist?list=PLuaHF6yUT-71U1rzdYwvMJWsJYhRpzG80&feature=shared',
      chapterNotes: 'https://drive.google.com/drive/folders/126OdgzmvuFcC1AZDlfd0D4kGH83lozaZ',
    },
  },

  statistics_1st: {
    id: 'statistics_1st',
    name: 'Statistics 1st Paper',
    mainSubject: 'Statistics',
    paper: '1st Paper',
    urls: {
      syllabus: 'https://drive.google.com/drive/folders/11rV948jnux8vdGuLqM02pUndlPgZ0jEz',
      markedBooks: 'https://drive.google.com/drive/folders/11wML_1PpGz00c_o-K5TVQlkozQD6eoV2',
      chapterClasses: 'https://youtube.com/playlist?list=PLuaHF6yUT-71U1rzdYwvMJWsJYhRpzG80&feature=shared',
      chapterNotes: 'https://drive.google.com/drive/folders/126OdgzmvuFcC1AZDlfd0D4kGH83lozaZ',
    },
  },

  statistics_2nd: {
    id: 'statistics_2nd',
    name: 'Statistics 2nd Paper',
    mainSubject: 'Statistics',
    paper: '2nd Paper',
    urls: {
      syllabus: 'https://drive.google.com/drive/folders/11rV948jnux8vdGuLqM02pUndlPgZ0jEz',
      markedBooks: 'https://drive.google.com/drive/folders/11wML_1PpGz00c_o-K5TVQlkozQD6eoV2',
      chapterClasses: 'https://youtube.com/playlist?list=PLuaHF6yUT-71U1rzdYwvMJWsJYhRpzG80&feature=shared',
      chapterNotes: 'https://drive.google.com/drive/folders/126OdgzmvuFcC1AZDlfd0D4kGH83lozaZ',
    },
  },

  economics_1st: {
    id: 'economics_1st',
    name: 'Economics 1st Paper',
    mainSubject: 'Economics',
    paper: '1st Paper',
    urls: {
      syllabus: 'https://drive.google.com/drive/folders/11rV948jnux8vdGuLqM02pUndlPgZ0jEz',
      markedBooks: 'https://drive.google.com/drive/folders/11wML_1PpGz00c_o-K5TVQlkozQD6eoV2',
      chapterClasses: 'https://youtube.com/playlist?list=PLuaHF6yUT-71U1rzdYwvMJWsJYhRpzG80&feature=shared',
      chapterNotes: 'https://drive.google.com/drive/folders/126OdgzmvuFcC1AZDlfd0D4kGH83lozaZ',
    },
  },

  economics_2nd: {
    id: 'economics_2nd',
    name: 'Economics 2nd Paper',
    mainSubject: 'Economics',
    paper: '2nd Paper',
    urls: {
      syllabus: 'https://drive.google.com/drive/folders/11rV948jnux8vdGuLqM02pUndlPgZ0jEz',
      markedBooks: 'https://drive.google.com/drive/folders/11wML_1PpGz00c_o-K5TVQlkozQD6eoV2',
      chapterClasses: 'https://youtube.com/playlist?list=PLuaHF6yUT-71U1rzdYwvMJWsJYhRpzG80&feature=shared',
      chapterNotes: 'https://drive.google.com/drive/folders/126OdgzmvuFcC1AZDlfd0D4kGH83lozaZ',
    },
  },

  accounting_1st: {
    id: 'accounting_1st',
    name: 'Accounting 1st Paper',
    mainSubject: 'Accounting',
    paper: '1st Paper',
    urls: {
      syllabus: 'https://drive.google.com/drive/folders/11rV948jnux8vdGuLqM02pUndlPgZ0jEz',
      markedBooks: 'https://drive.google.com/drive/folders/11wML_1PpGz00c_o-K5TVQlkozQD6eoV2',
      chapterClasses: 'https://youtube.com/playlist?list=PLuaHF6yUT-71U1rzdYwvMJWsJYhRpzG80&feature=shared',
      chapterNotes: 'https://drive.google.com/drive/folders/126OdgzmvuFcC1AZDlfd0D4kGH83lozaZ',
    },
  },

  accounting_2nd: {
    id: 'accounting_2nd',
    name: 'Accounting 2nd Paper',
    mainSubject: 'Accounting',
    paper: '2nd Paper',
    urls: {
      syllabus: 'https://drive.google.com/drive/folders/11rV948jnux8vdGuLqM02pUndlPgZ0jEz',
      markedBooks: 'https://drive.google.com/drive/folders/11wML_1PpGz00c_o-K5TVQlkozQD6eoV2',
      chapterClasses: 'https://youtube.com/playlist?list=PLuaHF6yUT-71U1rzdYwvMJWsJYhRpzG80&feature=shared',
      chapterNotes: 'https://drive.google.com/drive/folders/126OdgzmvuFcC1AZDlfd0D4kGH83lozaZ',
    },
  },

  management_1st: {
    id: 'management_1st',
    name: 'Management 1st Paper',
    mainSubject: 'Management',
    paper: '1st Paper',
    urls: {
      syllabus: 'https://drive.google.com/drive/folders/11rV948jnux8vdGuLqM02pUndlPgZ0jEz',
      markedBooks: 'https://drive.google.com/drive/folders/11wML_1PpGz00c_o-K5TVQlkozQD6eoV2',
      chapterClasses: 'https://youtube.com/playlist?list=PLuaHF6yUT-71U1rzdYwvMJWsJYhRpzG80&feature=shared',
      chapterNotes: 'https://drive.google.com/drive/folders/126OdgzmvuFcC1AZDlfd0D4kGH83lozaZ',
    },
  },

  management_2nd: {
    id: 'management_2nd',
    name: 'Management 2nd Paper',
    mainSubject: 'Management',
    paper: '2nd Paper',
    urls: {
      syllabus: 'https://drive.google.com/drive/folders/11rV948jnux8vdGuLqM02pUndlPgZ0jEz',
      markedBooks: 'https://drive.google.com/drive/folders/11wML_1PpGz00c_o-K5TVQlkozQD6eoV2',
      chapterClasses: 'https://youtube.com/playlist?list=PLuaHF6yUT-71U1rzdYwvMJWsJYhRpzG80&feature=shared',
      chapterNotes: 'https://drive.google.com/drive/folders/126OdgzmvuFcC1AZDlfd0D4kGH83lozaZ',
    },
  },

  finance_banking_1st: {
    id: 'finance_banking_1st',
    name: 'Finance 1st Paper',
    mainSubject: 'Finance',
    paper: '1st Paper',
    urls: {
      syllabus: 'https://drive.google.com/drive/folders/11rV948jnux8vdGuLqM02pUndlPgZ0jEz',
      markedBooks: 'https://drive.google.com/drive/folders/11wML_1PpGz00c_o-K5TVQlkozQD6eoV2',
      chapterClasses: 'https://youtube.com/playlist?list=PLuaHF6yUT-71U1rzdYwvMJWsJYhRpzG80&feature=shared',
      chapterNotes: 'https://drive.google.com/drive/folders/126OdgzmvuFcC1AZDlfd0D4kGH83lozaZ',
    },
  },

  finance_banking_2nd: {
    id: 'finance_banking_2nd',
    name: 'Finance 2nd Paper',
    mainSubject: 'Finance',
    paper: '2nd Paper',
    urls: {
      syllabus: 'https://drive.google.com/drive/folders/11rV948jnux8vdGuLqM02pUndlPgZ0jEz',
      markedBooks: 'https://drive.google.com/drive/folders/11wML_1PpGz00c_o-K5TVQlkozQD6eoV2',
      chapterClasses: 'https://youtube.com/playlist?list=PLuaHF6yUT-71U1rzdYwvMJWsJYhRpzG80&feature=shared',
      chapterNotes: 'https://drive.google.com/drive/folders/126OdgzmvuFcC1AZDlfd0D4kGH83lozaZ',
    },
  },

  marketing_1st: {
    id: 'marketing_1st',
    name: 'Marketing 1st Paper',
    mainSubject: 'Marketing',
    paper: '1st Paper',
    urls: {
      syllabus: 'https://drive.google.com/drive/folders/11rV948jnux8vdGuLqM02pUndlPgZ0jEz',
      markedBooks: 'https://drive.google.com/drive/folders/11wML_1PpGz00c_o-K5TVQlkozQD6eoV2',
      chapterClasses: 'https://youtube.com/playlist?list=PLuaHF6yUT-71U1rzdYwvMJWsJYhRpzG80&feature=shared',
      chapterNotes: 'https://drive.google.com/drive/folders/126OdgzmvuFcC1AZDlfd0D4kGH83lozaZ',
    },
  },

  marketing_2nd: {
    id: 'marketing_2nd',
    name: 'Marketing 2nd Paper',
    mainSubject: 'Marketing',
    paper: '2nd Paper',
    urls: {
      syllabus: 'https://drive.google.com/drive/folders/11rV948jnux8vdGuLqM02pUndlPgZ0jEz',
      markedBooks: 'https://drive.google.com/drive/folders/11wML_1PpGz00c_o-K5TVQlkozQD6eoV2',
      chapterClasses: 'https://youtube.com/playlist?list=PLuaHF6yUT-71U1rzdYwvMJWsJYhRpzG80&feature=shared',
      chapterNotes: 'https://drive.google.com/drive/folders/126OdgzmvuFcC1AZDlfd0D4kGH83lozaZ',
    },
  },

  // Additional subjects continue with the same pattern...
  geography_1st: {
    id: 'geography_1st',
    name: 'Geography 1st Paper',
    mainSubject: 'Geography',
    paper: '1st Paper',
    urls: {
      syllabus: 'https://drive.google.com/drive/folders/11rV948jnux8vdGuLqM02pUndlPgZ0jEz',
      markedBooks: 'https://drive.google.com/drive/folders/11wML_1PpGz00c_o-K5TVQlkozQD6eoV2',
      chapterClasses: 'https://youtube.com/playlist?list=PLuaHF6yUT-71U1rzdYwvMJWsJYhRpzG80&feature=shared',
      chapterNotes: 'https://drive.google.com/drive/folders/126OdgzmvuFcC1AZDlfd0D4kGH83lozaZ',
    },
  },

  geography_2nd: {
    id: 'geography_2nd',
    name: 'Geography 2nd Paper',
    mainSubject: 'Geography',
    paper: '2nd Paper',
    urls: {
      syllabus: 'https://drive.google.com/drive/folders/11rV948jnux8vdGuLqM02pUndlPgZ0jEz',
      markedBooks: 'https://drive.google.com/drive/folders/11wML_1PpGz00c_o-K5TVQlkozQD6eoV2',
      chapterClasses: 'https://youtube.com/playlist?list=PLuaHF6yUT-71U1rzdYwvMJWsJYhRpzG80&feature=shared',
      chapterNotes: 'https://drive.google.com/drive/folders/126OdgzmvuFcC1AZDlfd0D4kGH83lozaZ',
    },
  },

  history_1st: {
    id: 'history_1st',
    name: 'History 1st Paper',
    mainSubject: 'History',
    paper: '1st Paper',
    urls: {
      syllabus: 'https://drive.google.com/drive/folders/11rV948jnux8vdGuLqM02pUndlPgZ0jEz',
      markedBooks: 'https://drive.google.com/drive/folders/11wML_1PpGz00c_o-K5TVQlkozQD6eoV2',
      chapterClasses: 'https://youtube.com/playlist?list=PLuaHF6yUT-71U1rzdYwvMJWsJYhRpzG80&feature=shared',
      chapterNotes: 'https://drive.google.com/drive/folders/126OdgzmvuFcC1AZDlfd0D4kGH83lozaZ',
    },
  },

  history_2nd: {
    id: 'history_2nd',
    name: 'History 2nd Paper',
    mainSubject: 'History',
    paper: '2nd Paper',
    urls: {
      syllabus: 'https://drive.google.com/drive/folders/11rV948jnux8vdGuLqM02pUndlPgZ0jEz',
      markedBooks: 'https://drive.google.com/drive/folders/11wML_1PpGz00c_o-K5TVQlkozQD6eoV2',
      chapterClasses: 'https://youtube.com/playlist?list=PLuaHF6yUT-71U1rzdYwvMJWsJYhRpzG80&feature=shared',
      chapterNotes: 'https://drive.google.com/drive/folders/126OdgzmvuFcC1AZDlfd0D4kGH83lozaZ',
    },
  },

  // Continue with all remaining subjects...
  islamic_history_1st: {
    id: 'islamic_history_1st',
    name: 'Islamic History 1st Paper',
    mainSubject: 'Islamic History',
    paper: '1st Paper',
    urls: {
      syllabus: 'https://drive.google.com/drive/folders/11rV948jnux8vdGuLqM02pUndlPgZ0jEz',
      markedBooks: 'https://drive.google.com/drive/folders/11wML_1PpGz00c_o-K5TVQlkozQD6eoV2',
      chapterClasses: 'https://youtube.com/playlist?list=PLuaHF6yUT-71U1rzdYwvMJWsJYhRpzG80&feature=shared',
      chapterNotes: 'https://drive.google.com/drive/folders/126OdgzmvuFcC1AZDlfd0D4kGH83lozaZ',
    },
  },

  islamic_history_2nd: {
    id: 'islamic_history_2nd',
    name: 'Islamic History 2nd Paper',
    mainSubject: 'Islamic History',
    paper: '2nd Paper',
    urls: {
      syllabus: 'https://drive.google.com/drive/folders/11rV948jnux8vdGuLqM02pUndlPgZ0jEz',
      markedBooks: 'https://drive.google.com/drive/folders/11wML_1PpGz00c_o-K5TVQlkozQD6eoV2',
      chapterClasses: 'https://youtube.com/playlist?list=PLuaHF6yUT-71U1rzdYwvMJWsJYhRpzG80&feature=shared',
      chapterNotes: 'https://drive.google.com/drive/folders/126OdgzmvuFcC1AZDlfd0D4kGH83lozaZ',
    },
  },

  islamic_studies_1st: {
    id: 'islamic_studies_1st',
    name: 'Islamic Studies 1st Paper',
    mainSubject: 'Islamic Studies',
    paper: '1st Paper',
    urls: {
      syllabus: 'https://drive.google.com/drive/folders/11rV948jnux8vdGuLqM02pUndlPgZ0jEz',
      markedBooks: 'https://drive.google.com/drive/folders/11wML_1PpGz00c_o-K5TVQlkozQD6eoV2',
      chapterClasses: 'https://youtube.com/playlist?list=PLuaHF6yUT-71U1rzdYwvMJWsJYhRpzG80&feature=shared',
      chapterNotes: 'https://drive.google.com/drive/folders/126OdgzmvuFcC1AZDlfd0D4kGH83lozaZ',
    },
  },

  islamic_studies_2nd: {
    id: 'islamic_studies_2nd',
    name: 'Islamic Studies 2nd Paper',
    mainSubject: 'Islamic Studies',
    paper: '2nd Paper',
    urls: {
      syllabus: 'https://drive.google.com/drive/folders/11rV948jnux8vdGuLqM02pUndlPgZ0jEz',
      markedBooks: 'https://drive.google.com/drive/folders/11wML_1PpGz00c_o-K5TVQlkozQD6eoV2',
      chapterClasses: 'https://youtube.com/playlist?list=PLuaHF6yUT-71U1rzdYwvMJWsJYhRpzG80&feature=shared',
      chapterNotes: 'https://drive.google.com/drive/folders/126OdgzmvuFcC1AZDlfd0D4kGH83lozaZ',
    },
  },

  // Add any additional subjects following the same pattern...
  psychology_1st: {
    id: 'psychology_1st',
    name: 'Psychology 1st Paper',
    mainSubject: 'Psychology',
    paper: '1st Paper',
    urls: {
      syllabus: 'https://drive.google.com/drive/folders/11rV948jnux8vdGuLqM02pUndlPgZ0jEz',
      markedBooks: 'https://drive.google.com/drive/folders/11wML_1PpGz00c_o-K5TVQlkozQD6eoV2',
      chapterClasses: 'https://youtube.com/playlist?list=PLuaHF6yUT-71U1rzdYwvMJWsJYhRpzG80&feature=shared',
      chapterNotes: 'https://drive.google.com/drive/folders/126OdgzmvuFcC1AZDlfd0D4kGH83lozaZ',
    },
  },

  psychology_2nd: {
    id: 'psychology_2nd',
    name: 'Psychology 2nd Paper',
    mainSubject: 'Psychology',
    paper: '2nd Paper',
    urls: {
      syllabus: 'https://drive.google.com/drive/folders/11rV948jnux8vdGuLqM02pUndlPgZ0jEz',
      markedBooks: 'https://drive.google.com/drive/folders/11wML_1PpGz00c_o-K5TVQlkozQD6eoV2',
      chapterClasses: 'https://youtube.com/playlist?list=PLuaHF6yUT-71U1rzdYwvMJWsJYhRpzG80&feature=shared',
      chapterNotes: 'https://drive.google.com/drive/folders/126OdgzmvuFcC1AZDlfd0D4kGH83lozaZ',
    },
  },

  // Additional subjects for complete coverage
  civics_1st: {
    id: 'civics_1st',
    name: 'Civics 1st Paper',
    mainSubject: 'Civics',
    paper: '1st Paper',
    urls: {
      syllabus: 'https://drive.google.com/drive/folders/11rV948jnux8vdGuLqM02pUndlPgZ0jEz',
      markedBooks: 'https://drive.google.com/drive/folders/11wML_1PpGz00c_o-K5TVQlkozQD6eoV2',
      chapterClasses: 'https://youtube.com/playlist?list=PLuaHF6yUT-71U1rzdYwvMJWsJYhRpzG80&feature=shared',
      chapterNotes: 'https://drive.google.com/drive/folders/126OdgzmvuFcC1AZDlfd0D4kGH83lozaZ',
    },
  },

  civics_2nd: {
    id: 'civics_2nd',
    name: 'Civics 2nd Paper',
    mainSubject: 'Civics',
    paper: '2nd Paper',
    urls: {
      syllabus: 'https://drive.google.com/drive/folders/11rV948jnux8vdGuLqM02pUndlPgZ0jEz',
      markedBooks: 'https://drive.google.com/drive/folders/11wML_1PpGz00c_o-K5TVQlkozQD6eoV2',
      chapterClasses: 'https://youtube.com/playlist?list=PLuaHF6yUT-71U1rzdYwvMJWsJYhRpzG80&feature=shared',
      chapterNotes: 'https://drive.google.com/drive/folders/126OdgzmvuFcC1AZDlfd0D4kGH83lozaZ',
    },
  },

  logic_1st: {
    id: 'logic_1st',
    name: 'Logic 1st Paper',
    mainSubject: 'Logic',
    paper: '1st Paper',
    urls: {
      syllabus: 'https://drive.google.com/drive/folders/11rV948jnux8vdGuLqM02pUndlPgZ0jEz',
      markedBooks: 'https://drive.google.com/drive/folders/11wML_1PpGz00c_o-K5TVQlkozQD6eoV2',
      chapterClasses: 'https://youtube.com/playlist?list=PLuaHF6yUT-71U1rzdYwvMJWsJYhRpzG80&feature=shared',
      chapterNotes: 'https://drive.google.com/drive/folders/126OdgzmvuFcC1AZDlfd0D4kGH83lozaZ',
    },
  },

  logic_2nd: {
    id: 'logic_2nd',
    name: 'Logic 2nd Paper',
    mainSubject: 'Logic',
    paper: '2nd Paper',
    urls: {
      syllabus: 'https://drive.google.com/drive/folders/11rV948jnux8vdGuLqM02pUndlPgZ0jEz',
      markedBooks: 'https://drive.google.com/drive/folders/11wML_1PpGz00c_o-K5TVQlkozQD6eoV2',
      chapterClasses: 'https://youtube.com/playlist?list=PLuaHF6yUT-71U1rzdYwvMJWsJYhRpzG80&feature=shared',
      chapterNotes: 'https://drive.google.com/drive/folders/126OdgzmvuFcC1AZDlfd0D4kGH83lozaZ',
    },
  },

  social_work_1st: {
    id: 'social_work_1st',
    name: 'Social Work 1st Paper',
    mainSubject: 'Social Work',
    paper: '1st Paper',
    urls: {
      syllabus: 'https://drive.google.com/drive/folders/11rV948jnux8vdGuLqM02pUndlPgZ0jEz',
      markedBooks: 'https://drive.google.com/drive/folders/11wML_1PpGz00c_o-K5TVQlkozQD6eoV2',
      chapterClasses: 'https://youtube.com/playlist?list=PLuaHF6yUT-71U1rzdYwvMJWsJYhRpzG80&feature=shared',
      chapterNotes: 'https://drive.google.com/drive/folders/126OdgzmvuFcC1AZDlfd0D4kGH83lozaZ',
    },
  },

  social_work_2nd: {
    id: 'social_work_2nd',
    name: 'Social Work 2nd Paper',
    mainSubject: 'Social Work',
    paper: '2nd Paper',
    urls: {
      syllabus: 'https://drive.google.com/drive/folders/11rV948jnux8vdGuLqM02pUndlPgZ0jEz',
      markedBooks: 'https://drive.google.com/drive/folders/11wML_1PpGz00c_o-K5TVQlkozQD6eoV2',
      chapterClasses: 'https://youtube.com/playlist?list=PLuaHF6yUT-71U1rzdYwvMJWsJYhRpzG80&feature=shared',
      chapterNotes: 'https://drive.google.com/drive/folders/126OdgzmvuFcC1AZDlfd0D4kGH83lozaZ',
    },
  },

  sociology_1st: {
    id: 'sociology_1st',
    name: 'Sociology 1st Paper',
    mainSubject: 'Sociology',
    paper: '1st Paper',
    urls: {
      syllabus: 'https://drive.google.com/drive/folders/11rV948jnux8vdGuLqM02pUndlPgZ0jEz',
      markedBooks: 'https://drive.google.com/drive/folders/11wML_1PpGz00c_o-K5TVQlkozQD6eoV2',
      chapterClasses: 'https://youtube.com/playlist?list=PLuaHF6yUT-71U1rzdYwvMJWsJYhRpzG80&feature=shared',
      chapterNotes: 'https://drive.google.com/drive/folders/126OdgzmvuFcC1AZDlfd0D4kGH83lozaZ',
    },
  },

  sociology_2nd: {
    id: 'sociology_2nd',
    name: 'Sociology 2nd Paper',
    mainSubject: 'Sociology',
    paper: '2nd Paper',
    urls: {
      syllabus: 'https://drive.google.com/drive/folders/11rV948jnux8vdGuLqM02pUndlPgZ0jEz',
      markedBooks: 'https://drive.google.com/drive/folders/11wML_1PpGz00c_o-K5TVQlkozQD6eoV2',
      chapterClasses: 'https://youtube.com/playlist?list=PLuaHF6yUT-71U1rzdYwvMJWsJYhRpzG80&feature=shared',
      chapterNotes: 'https://drive.google.com/drive/folders/126OdgzmvuFcC1AZDlfd0D4kGH83lozaZ',
    },
  },

  agriculture_1st: {
    id: 'agriculture_1st',
    name: 'Agriculture 1st Paper',
    mainSubject: 'Agriculture',
    paper: '1st Paper',
    urls: {
      syllabus: 'https://drive.google.com/drive/folders/11rV948jnux8vdGuLqM02pUndlPgZ0jEz',
      markedBooks: 'https://drive.google.com/drive/folders/11wML_1PpGz00c_o-K5TVQlkozQD6eoV2',
      chapterClasses: 'https://youtube.com/playlist?list=PLuaHF6yUT-71U1rzdYwvMJWsJYhRpzG80&feature=shared',
      chapterNotes: 'https://drive.google.com/drive/folders/126OdgzmvuFcC1AZDlfd0D4kGH83lozaZ',
    },
  },

  agriculture_2nd: {
    id: 'agriculture_2nd',
    name: 'Agriculture 2nd Paper',
    mainSubject: 'Agriculture',
    paper: '2nd Paper',
    urls: {
      syllabus: 'https://drive.google.com/drive/folders/11rV948jnux8vdGuLqM02pUndlPgZ0jEz',
      markedBooks: 'https://drive.google.com/drive/folders/11wML_1PpGz00c_o-K5TVQlkozQD6eoV2',
      chapterClasses: 'https://youtube.com/playlist?list=PLuaHF6yUT-71U1rzdYwvMJWsJYhRpzG80&feature=shared',
      chapterNotes: 'https://drive.google.com/drive/folders/126OdgzmvuFcC1AZDlfd0D4kGH83lozaZ',
    },
  },

  agricultural_education_1st: {
    id: 'agricultural_education_1st',
    name: 'Agricultural Education 1st Paper',
    mainSubject: 'Agricultural Education',
    paper: '1st Paper',
    urls: {
      syllabus: 'https://drive.google.com/drive/folders/11rV948jnux8vdGuLqM02pUndlPgZ0jEz',
      markedBooks: 'https://drive.google.com/drive/folders/11wML_1PpGz00c_o-K5TVQlkozQD6eoV2',
      chapterClasses: 'https://youtube.com/playlist?list=PLuaHF6yUT-71U1rzdYwvMJWsJYhRpzG80&feature=shared',
      chapterNotes: 'https://drive.google.com/drive/folders/126OdgzmvuFcC1AZDlfd0D4kGH83lozaZ',
    },
  },

  agricultural_education_2nd: {
    id: 'agricultural_education_2nd',
    name: 'Agricultural Education 2nd Paper',
    mainSubject: 'Agricultural Education',
    paper: '2nd Paper',
    urls: {
      syllabus: 'https://drive.google.com/drive/folders/11rV948jnux8vdGuLqM02pUndlPgZ0jEz',
      markedBooks: 'https://drive.google.com/drive/folders/11wML_1PpGz00c_o-K5TVQlkozQD6eoV2',
      chapterClasses: 'https://youtube.com/playlist?list=PLuaHF6yUT-71U1rzdYwvMJWsJYhRpzG80&feature=shared',
      chapterNotes: 'https://drive.google.com/drive/folders/126OdgzmvuFcC1AZDlfd0D4kGH83lozaZ',
    },
  },
};
