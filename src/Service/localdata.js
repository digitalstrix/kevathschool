export const kevath_user = "kevath_user";
export const session_data = "session_data";
export const skipped_question = "SKIPPED_QUESTIONS";
export const answered_question = "ANSWERED_QUESTIONS";

export const getUserData = async () => {
  const data = localStorage.getItem(kevath_user);
  if (data != null) return JSON.parse(data);
  else return null;
};

export const getSessiondata = async () => {
  const data = localStorage.getItem(session_data);
  if (data != null) return JSON.parse(data);
};

export const testData = {
  questions: [
    {
      questionSequence: 1,
      QuestionId: "49af78e9-3dc1-4474-9190-1aa102e583ea",
    },
    {
      questionSequence: 2,
      QuestionId: "2c16bf94-ce84-4aa2-a5c0-1b467ac3ca97",
    },
  ],
};

export const QUESTION_1 = {
  id: "49af78e9-3dc1-4474-9190-1aa102e583ea",
  questionStatement: "What is India Capital city?",
  score: 1,
  answer: "A",
  options: [
    {
      id: "cb8956c2-8e18-4bdb-9de8-298e2d70a1a2",
      option: "A",
      optionText: "Delhi",
      _id: "63669286c0e5e0cf3806ed8b",
    },
    {
      id: "cb8956c2-8e18-4bdb-9de8-298e2d70a1a2",
      option: "B",
      optionText: "Mumbai",
      _id: "63669286c0e5e0cf3806ed8c",
    },
    {
      id: "cb8956c2-8e18-4bdb-9de8-298e2d70a1a2",
      option: "C",
      optionText: "Hyderabad",
      _id: "63669286c0e5e0cf3806ed8d",
    },
    {
      id: "cb8956c2-8e18-4bdb-9de8-298e2d70a1a2",
      option: "D",
      optionText: "Delhii",
      _id: "63669286c0e5e0cf3806ed8e",
    },
  ],
  status: "publish",
  isDeleted: false,
  createdDate: "2022-11-05T16:38:10.581Z",
  createdBy: null,
  modifiedDate: "2022-11-07T18:44:42.200Z",
  modifiedBy: null,
};

export const QUESTION_2 = {
  id: "2c16bf94-ce84-4aa2-a5c0-1b467ac3ca97",
  questionStatement: "What is India Financial city?",
  score: 1,
  answer: "B",
  options: [
    {
      id: "d74e3359-99f3-447d-8d09-a1a9265e4c01",
      option: "A",
      optionText: "Delhi",
      _id: "636f63c1a905c6a3fda82a4a",
    },
    {
      id: "d74e3359-99f3-447d-8d09-a1a9265e4c01",
      option: "B",
      optionText: "Mumbai",
      _id: "636f63c1a905c6a3fda82a4b",
    },
    {
      id: "d74e3359-99f3-447d-8d09-a1a9265e4c01",
      option: "C",
      optionText: "Hyderabad",
      _id: "636f63c1a905c6a3fda82a4c",
    },
    {
      id: "d74e3359-99f3-447d-8d09-a1a9265e4c01",
      option: "D",
      optionText: "Delhii",
      _id: "636f63c1a905c6a3fda82a4d",
    },
  ],
  status: "draft",
  isDeleted: false,
  createdDate: "2022-11-12T09:13:13.885Z",
  createdBy: null,
  modifiedDate: "2022-11-12T09:13:13.885Z",
  modifiedBy: null,
};

export const saveInAnswered = async (q_no) => {
  const allAnswered = await getAnswered();
  console.log(q_no, allAnswered, "<<<<< thisisanswered");
  if (await checkIsAnswered(q_no)) {
  } else {
    if (allAnswered) {
      await localStorage.setItem(
        answered_question,
        JSON.stringify([...allAnswered, q_no])
      );
    } else {
      await localStorage.setItem(answered_question, JSON.stringify([q_no]));
    }
  }
};
export const saveInSkipped = async (q_no) => {
  const allSkipped = await getSkipped();
  if (await checkIsAnswered(q_no)) {
  } else {
    if (allSkipped) {
      await localStorage.setItem(
        skipped_question,
        JSON.stringify([...allSkipped, q_no])
      );
    } else {
      await localStorage.setItem(skipped_question, JSON.stringify([q_no]));
    }
  }
};

export const getSkipped = async () => {
  const data = await localStorage.getItem(skipped_question);
  if (data) return JSON.parse(data);
  else return null;
};

export const getAnswered = async () => {
  const data = await localStorage.getItem(answered_question);
  if (data) return JSON.parse(data);
  else return null;
};

export const checkIsSkipped = async (q_no) => {
  const allSkipped = await getSkipped();
  if (allSkipped != null) {
    const checkIsInArray = allSkipped.filter((item) => item == q_no);
    if (checkIsInArray.length > 0) return true;
    else return false;
  } else return false;
};
export const checkIsAnswered = async (q_no) => {
  const allAnswered = await getAnswered();
  if (allAnswered != null) {
    const checkIsInArray = allAnswered.filter((item) => item == q_no);
    if (checkIsInArray.length > 0) return true;
    else return false;
  } else return false;
};

export const MatchColor = async (q_no, callback) => {
  let skipped = await checkIsSkipped(q_no);
  let answered = await checkIsAnswered(q_no);
  console.log("MatchColor", skipped, answered, q_no);
  if (answered) {
    callback(2);
    // return 2;
  }
  if (skipped) callback(1);
  else callback(0);
};
