import NotebookBackup from "./NotebookBackup.jsx";
import { mergeEntries } from "./notebook-storage.mjs";
// Application recovered from the owner’s public Rally release. See RECOVERY.md.
import {
  i,
  R,
  Dc,
  Pc,
  xu,
  Su,
  Nu,
  Pu,
  Fu,
  Iu,
  Lu,
  Vu,
  Hu,
  Uu,
  Wu,
  Gu,
  Ku,
  qu,
  Ju,
  Yu,
  Xu,
  Zu,
  Qu,
  $u,
  ed,
  td,
  nd,
  Pg,
  Ig,
  Ab,
  jb,
  Nw,
  Pw,
  Iw,
  Lw,
  Rw,
  zw,
  Bw,
  Vw,
  Hw,
  Uw,
  Kw,
  qw,
  Jw,
  Yw,
  Qw,
  $w,
  eT,
  OE,
  kE,
  AE,
  jE,
} from "./ui-runtime.js";
var learningSources = {
    first: {
      label: `Reddit · First tournament`,
      url: `https://www.reddit.com/r/Debate/comments/za8k0r/`,
    },
    training: {
      label: `Reddit · Training resources`,
      url: `https://www.reddit.com/r/lincolndouglas/comments/1w5qsrk/training_resources/`,
    },
    impromptu: {
      label: `Reddit · Improving impromptu`,
      url: `https://www.reddit.com/r/Debate/comments/1qgx6ir/how_do_i_improve_in_impromptu_speaking/`,
    },
    structure: {
      label: `Reddit · Speaking tips`,
      url: `https://www.reddit.com/r/PublicSpeaking/comments/1rilskn/tips_for_impromptu_speaking/`,
    },
    examples: {
      label: `Reddit · Impromptu discussion`,
      url: `https://www.reddit.com/r/Debate/comments/1u3jc29/impromptu_discussion/`,
    },
    toast: {
      label: `Toastmasters · Matt Abrahams`,
      url: `https://www.toastmasters.org/magazine/magazine-issues/2023/sept/impromptu-speaking`,
    },
    practice: {
      label: `Toastmasters · Speech practice`,
      url: `https://www.toastmasters.org/magazine/magazine-issues/2019/oct/prep-talk`,
    },
    uil: {
      label: `UIL · LD guide`,
      url: `https://www.uiltexas.org/speech/debate/uil-lincoln-douglas-debate-Guide`,
    },
    park: {
      label: `Tobias Park · LD course`,
      url: `https://tobiasjpark.github.io/debate/`,
    },
    drills: {
      label: `DebateDrills · LD resources`,
      url: `https://www.debatedrills.com/lincoln-douglas`,
    },
  },
  NE = [
    [
      `Start with one clear point`,
      `Impromptu`,
      `Say your answer in one sentence before adding details.`,
      `Answer “Is practice more important than talent?” in ten words.`,
      `structure`,
    ],
    [
      `Give your speech a simple shape`,
      `Impromptu`,
      `Try point, reason, example, then point again.`,
      `Give each part one sentence. You now have a short speech.`,
      `structure`,
    ],
    [
      `Pause before you begin`,
      `Confidence`,
      `A quiet breath gives you a moment to choose your first sentence.`,
      `Look up, pause, then say your point.`,
      `structure`,
    ],
    [
      `Aim to be understood`,
      `Confidence`,
      `Clear everyday words are enough. You do not need to sound impressive.`,
      `Explain your point as if a younger sibling were listening.`,
      `toast`,
    ],
    [
      `Practice out loud`,
      `Practice`,
      `Thinking through a speech is different from actually saying it.`,
      `Set two minutes and speak to an empty chair.`,
      `practice`,
    ],
    [
      `Redo the same speech`,
      `Practice`,
      `A second attempt lets you use feedback immediately.`,
      `Give the same short talk again, changing just your opening.`,
      `impromptu`,
    ],
    [
      `Review one recording`,
      `Practice`,
      `Listen for a clear idea and one place you could improve.`,
      `Write one keep and one try next. Then stop reviewing.`,
      `impromptu`,
    ],
    [
      `Connect every example back`,
      `Impromptu`,
      `A story helps only if the listener knows how it supports your point.`,
      `End your example with “This shows…”`,
      `impromptu`,
    ],
    [
      `Build a small example bank`,
      `Impromptu`,
      `Remember useful moments from books, school, sports, or your own life.`,
      `List three true stories and a lesson each could illustrate.`,
      `examples`,
    ],
    [
      `Finish with your main idea`,
      `Impromptu`,
      `Help the listener remember what you wanted them to understand.`,
      `Close in one sentence that answers the original prompt.`,
      `toast`,
    ],
    [
      `Flow while you listen`,
      `Lincoln–Douglas`,
      `Use short labels for the other side’s reasons and values.`,
      `Listen to a practice speech and capture three keywords per point.`,
      `first`,
    ],
    [
      `Watch with a pencil`,
      `Lincoln–Douglas`,
      `Watching a round becomes practice when you track the arguments.`,
      `Pause after one speech and summarize its strongest reason.`,
      `training`,
    ],
    [
      `Redo a rebuttal`,
      `Lincoln–Douglas`,
      `Use the same notes to make your response clearer the second time.`,
      `Repeat your reply and make the comparison between sides explicit.`,
      `training`,
    ],
    [
      `Practice both sides`,
      `Lincoln–Douglas`,
      `Trying the other side helps you notice weaknesses in your own case.`,
      `Give one reason for each side of the same prompt.`,
      `training`,
    ],
    [
      `Find a practice partner`,
      `Practice`,
      `A teammate or parent can help you practice responding to real questions.`,
      `Ask a listener to repeat your main point back to you.`,
      `training`,
    ],
    [
      `Nerves do not mean failure`,
      `Confidence`,
      `New debaters stumble too. A difficult round can still teach you something.`,
      `After practice, name one thing you did better than before.`,
      `first`,
    ],
    [
      `Match your local format`,
      `Tournament`,
      `Different leagues and judges have different expectations.`,
      `Ask your coach about timing, notes, and the style of nearby rounds.`,
      `training`,
    ],
    [
      `Explain your value and criterion`,
      `Lincoln–Douglas`,
      `Say what matters, then explain how you will compare the sides.`,
      `Try: “I value fairness. I will compare who gets a real chance to learn.”`,
      `park`,
    ],
    [
      `Ask one question at a time`,
      `Lincoln–Douglas`,
      `Short questions make answers easier to understand and use.`,
      `Ask “Why does that cause learning?” Then listen before following up.`,
      `park`,
    ],
    [
      `Check the rules before the round`,
      `Tournament`,
      `Your event’s rules decide what timing and materials are allowed.`,
      `With a parent or coach, check your tournament invitation and handbook.`,
      `uil`,
    ],
  ].map(([e, t, n, r, i]) => ({
    title: e,
    category: t,
    meaning: n,
    drill: r,
    source: learningSources[i],
  })),
  PE = Object.entries({
    "School & learning": [
      [
        `Homework`,
        `Learning tasks done outside class.`,
        `Should schools give less homework?`,
        `Extra practice or time for rest?`,
      ],
      [
        `School uniforms`,
        `A shared clothing rule for students.`,
        `Should students wear school uniforms?`,
        `Belonging and cost, or personal choice?`,
      ],
      [
        `Grades`,
        `Labels used to describe school performance.`,
        `Do grades show how much someone has learned?`,
        `A clear measure or an incomplete picture?`,
      ],
      [
        `Group projects`,
        `Students sharing responsibility for one task.`,
        `Are group projects better than solo projects?`,
        `Shared ideas or unequal work?`,
      ],
      [
        `Student voice`,
        `Students helping make decisions that affect them.`,
        `Should students help choose school rules?`,
        `Firsthand experience or adult responsibility?`,
      ],
      [
        `Recess`,
        `Time for play and a break from lessons.`,
        `Should middle schools have more recess?`,
        `Rest and movement or less class time?`,
      ],
      [
        `Arts education`,
        `Learning through music, art, drama, and design.`,
        `Should every student take an arts class?`,
        `Creative growth or more choice in classes?`,
      ],
      [
        `Open-book tests`,
        `Tests that allow reference materials.`,
        `Should more tests be open-book?`,
        `Applying ideas or recalling facts?`,
      ],
      [
        `Later school starts`,
        `Moving the first lesson to a later time.`,
        `Should school start later in the morning?`,
        `Rest or family and activity schedules?`,
      ],
      [
        `Financial education`,
        `Learning how saving, spending, and borrowing work.`,
        `Should schools teach money skills?`,
        `Daily usefulness or limited class time?`,
      ],
    ],
    "Values & choices": [
      [
        `Fairness`,
        `Treating people in a just way, which may require different kinds of support.`,
        `Does fair always mean equal?`,
        `Same treatment or help matched to need?`,
      ],
      [
        `Freedom`,
        `The ability to make choices without unnecessary limits.`,
        `When should freedom have limits?`,
        `Personal choice or effects on others?`,
      ],
      [
        `Responsibility`,
        `Being accountable for your choices and duties.`,
        `Does more freedom require more responsibility?`,
        `Independence or shared protection?`,
      ],
      [
        `Honesty`,
        `Trying to communicate truthfully.`,
        `Is honesty always the kindest choice?`,
        `Truth, timing, and someone’s feelings.`,
      ],
      [
        `Courage`,
        `Acting on something important despite fear.`,
        `Can asking for help be brave?`,
        `Risk-taking or knowing your limits?`,
      ],
      [
        `Loyalty`,
        `Staying committed to a person, group, or cause.`,
        `Should you always support your friends?`,
        `Supporting a person or challenging a bad choice?`,
      ],
      [
        `Privacy`,
        `Having control over personal information and space.`,
        `When should parents give kids more privacy?`,
        `Growing independence or guidance and safety?`,
      ],
      [
        `Forgiveness`,
        `Choosing how to move forward after someone causes harm.`,
        `Does everyone deserve a second chance?`,
        `Growth, accountability, and repeated behavior.`,
      ],
      [
        `Rules`,
        `Shared expectations for what people may do.`,
        `Can breaking a rule ever be the right choice?`,
        `Order or fixing an unfair situation?`,
      ],
      [
        `Success`,
        `A goal or standard for doing well.`,
        `Is winning the best measure of success?`,
        `Rankings or personal improvement?`,
      ],
    ],
    "Technology & media": [
      [
        `Phones at school`,
        `Personal devices used during the school day.`,
        `Should phones be put away during lessons?`,
        `Focus or useful tools and communication?`,
      ],
      [
        `Artificial intelligence`,
        `Computer systems that perform tasks such as finding patterns or generating text.`,
        `When should students use AI for schoolwork?`,
        `Helpful support or skipping the learning?`,
      ],
      [
        `Screen time`,
        `Time spent using digital devices.`,
        `Should families set screen-time limits?`,
        `Balance or judging what the screen is used for?`,
      ],
      [
        `Online friendship`,
        `Relationships maintained through digital communication.`,
        `Can online friendships be as strong as offline ones?`,
        `Connection, trust, and shared experiences.`,
      ],
      [
        `Digital footprints`,
        `Traces left by things people do or share online.`,
        `Should people be able to erase old online posts?`,
        `A fresh start or accountability?`,
      ],
      [
        `Advertising`,
        `Messages designed to persuade people to buy or support something.`,
        `Should advertising to children have stricter limits?`,
        `Consumer protection or access to information?`,
      ],
      [
        `Algorithms`,
        `Step-by-step processes used to make decisions or solve problems.`,
        `Should apps explain why they recommend things?`,
        `Transparency or complicated systems?`,
      ],
      [
        `Automation`,
        `Machines or software doing tasks people used to do.`,
        `Should machines do more everyday chores?`,
        `Time saved or skills lost?`,
      ],
      [
        `Misinformation`,
        `False or inaccurate information, whether shared on purpose or by mistake.`,
        `Who should check whether online information is reliable?`,
        `Individuals, platforms, and shared responsibility.`,
      ],
      [
        `Video games`,
        `Interactive digital games for play, competition, or learning.`,
        `Can video games teach useful skills?`,
        `Learning and teamwork or distraction?`,
      ],
    ],
    "Community & world": [
      [
        `Public libraries`,
        `Shared places to borrow materials and access learning resources.`,
        `Are libraries still important in a digital world?`,
        `Access, shared space, and changing needs.`,
      ],
      [
        `Volunteering`,
        `Giving time to help without expecting payment.`,
        `Should students be required to volunteer?`,
        `Community benefit or freely chosen service?`,
      ],
      [
        `Public transportation`,
        `Shared travel services such as buses and trains.`,
        `Should cities invest more in public transportation?`,
        `Access and shared costs.`,
      ],
      [
        `Public parks`,
        `Outdoor spaces that a community can share.`,
        `Should cities create more parks?`,
        `Play and nature or competing uses of space?`,
      ],
      [
        `Recycling`,
        `Processing used materials so they can be used again.`,
        `Should schools do more to reduce waste?`,
        `Habits and resources versus effort and cost.`,
      ],
      [
        `Conservation`,
        `Protecting natural places and resources.`,
        `Should protecting nature come before new development?`,
        `Long-term protection or present community needs?`,
      ],
      [
        `Animal welfare`,
        `How animals are treated and cared for.`,
        `What responsibilities do people have toward animals?`,
        `Care, human needs, and different settings.`,
      ],
      [
        `Space exploration`,
        `Studying and traveling beyond Earth.`,
        `Should we explore space while problems remain on Earth?`,
        `Discovery and future benefits or urgent needs now?`,
      ],
      [
        `Cultural traditions`,
        `Practices and ideas shared across generations.`,
        `Should traditions change as society changes?`,
        `Belonging and continuity or improvement?`,
      ],
      [
        `Community decisions`,
        `Choices about shared local needs.`,
        `Should young people have more say in community decisions?`,
        `Fresh perspectives or experience?`,
      ],
    ],
    "Character & everyday life": [
      [
        `Resilience`,
        `Recovering and adapting after setbacks.`,
        `Can failure help you succeed?`,
        `Learning from mistakes without celebrating avoidable harm.`,
      ],
      [
        `Curiosity`,
        `Wanting to understand something better.`,
        `Are good questions more useful than quick answers?`,
        `Exploration or timely decisions?`,
      ],
      [
        `Empathy`,
        `Trying to understand how another person feels or sees a situation.`,
        `Can you understand someone without agreeing with them?`,
        `Listening and keeping your own judgment.`,
      ],
      [
        `Leadership`,
        `Helping a group choose a direction and act together.`,
        `Does a leader need to be the loudest person?`,
        `Speaking up, listening, and setting an example.`,
      ],
      [
        `Cooperation`,
        `Working together toward a goal.`,
        `Is cooperation more useful than competition?`,
        `Shared success or motivation to improve?`,
      ],
      [
        `Competition`,
        `Trying to do better than others under shared conditions.`,
        `Can competition strengthen friendships?`,
        `Challenge and fun or pressure and comparison?`,
      ],
      [
        `Creativity`,
        `Making new connections or trying new approaches.`,
        `Can limits make people more creative?`,
        `A useful challenge or less room to explore?`,
      ],
      [
        `Patience`,
        `Handling waiting or difficulty without immediately giving up.`,
        `When is patience better than taking action?`,
        `Careful timing or a missed opportunity?`,
      ],
      [
        `Belonging`,
        `Feeling accepted and connected to a group.`,
        `What makes a place feel like home?`,
        `People, memories, routines, or a location?`,
      ],
      [
        `Balance`,
        `Managing needs that compete for your time and attention.`,
        `Is it better to plan every day or leave room for surprises?`,
        `Preparation or flexibility?`,
      ],
    ],
  }).flatMap(([e, t]) =>
    t.map(([t, n, r, i]) => ({
      title: t,
      category: e,
      meaning: n,
      prompt: r,
      consider: i,
    })),
  ),
  FE = [
    [
      `Resolution`,
      `The statement the two sides debate.`,
      `Schools should prioritize cooperation over competition.`,
    ],
    [
      `Affirmative (Aff)`,
      `The side supporting the resolution.`,
      `I affirm the resolution.`,
    ],
    [
      `Negative (Neg)`,
      `The side opposing the resolution.`,
      `I disagree that cooperation should take priority.`,
    ],
    [
      `Case`,
      `An organized set of arguments supporting your side.`,
      `My case has a value, a criterion, and two contentions.`,
    ],
    [
      `Claim`,
      `The point you want someone to accept.`,
      `Group work can help students learn.`,
    ],
    [
      `Warrant`,
      `The reasoning that explains why a claim makes sense.`,
      `Explaining an idea to a teammate can reveal gaps in understanding.`,
    ],
    [
      `Evidence`,
      `Information offered to support an argument.`,
      `A school’s dated attendance records could support a claim about absences.`,
    ],
    [
      `Impact`,
      `Why an argument matters; its consequence or significance.`,
      `Better understanding helps students handle the next lesson.`,
    ],
    [
      `Contention`,
      `A main argument in a debate case.`,
      `Contention one: cooperation supports learning.`,
    ],
    [
      `Framework`,
      `The approach used to judge which side should win.`,
      `Compare which side best protects meaningful learning opportunities.`,
    ],
    [
      `Value`,
      `An important principle your argument aims to uphold.`,
      `Fairness is my value.`,
    ],
    [
      `Criterion`,
      `A standard used to compare how well each side upholds the value.`,
      `Judge fairness by whether each student has a real chance to learn.`,
    ],
    [
      `Constructive`,
      `A speech used to build a case; it may also answer the other side.`,
      `The negative constructive presents reasons and responds to the affirmative.`,
    ],
    [
      `Rebuttal`,
      `A speech or response that challenges and compares existing arguments.`,
      `Their answer does not address students who need extra help.`,
    ],
    [
      `Cross-examination (CX)`,
      `A period when one debater asks questions and the other answers.`,
      `What do you mean by equal opportunity?`,
    ],
    [
      `Flow`,
      `Organized notes that track arguments across speeches.`,
      `Keep responses to the same argument on the same row.`,
    ],
    [
      `Signposting`,
      `Telling listeners which argument or section you are discussing.`,
      `Now, their second contention.`,
    ],
    [
      `Roadmap`,
      `A brief preview of the order of your speech.`,
      `First their case, then my two contentions.`,
    ],
    [
      `Clash`,
      `A direct disagreement between the sides about an argument.`,
      `One side says competition motivates; the other says it excludes.`,
    ],
    [
      `Refutation`,
      `Explaining why an opposing argument should not be accepted.`,
      `Their example does not show what happens to all students.`,
    ],
    [
      `Extension`,
      `Carrying an earlier argument forward and explaining why it still matters.`,
      `Our peer-learning reason survives their response because…`,
    ],
    [
      `Drop`,
      `An argument left unanswered in a speech where a response was expected.`,
      `They did not respond to the access concern; explain its importance.`,
    ],
    [
      `Concession`,
      `Accepting a particular point from the other side.`,
      `I agree that groups need individual responsibility.`,
    ],
    [
      `Turn`,
      `An argument that reverses the other side’s claimed benefit or reasoning.`,
      `Their policy may increase the very problem they want to reduce.`,
    ],
    [
      `Weighing`,
      `Comparing reasons to explain which should matter more to the judge.`,
      `This benefit reaches more students and is more likely.`,
    ],
    [
      `Magnitude`,
      `How large or serious an impact would be.`,
      `How much would learning improve?`,
    ],
    [
      `Probability`,
      `How likely an outcome is.`,
      `What makes this benefit likely rather than merely possible?`,
    ],
    [
      `Timeframe`,
      `When an outcome happens and how long it lasts.`,
      `Would this help this semester or only years later?`,
    ],
    [
      `Scope`,
      `How widely an effect reaches.`,
      `Would it help one class or the whole school?`,
    ],
    [
      `Burden of proof`,
      `What a side needs to establish to support its position.`,
      `Give reasons that support the resolution, not just an opinion.`,
    ],
    [`Status quo`, `The current situation.`, `What does the school do now?`],
    [
      `Trade-off`,
      `Giving up one benefit to gain another.`,
      `More practice time may mean less free time.`,
    ],
    [
      `Counterexample`,
      `An example that challenges a broad claim.`,
      `One helpful quiet leader challenges “all leaders are loud.”`,
    ],
    [
      `Assumption`,
      `Something an argument takes for granted.`,
      `Does the argument assume everyone has internet at home?`,
    ],
    [
      `Causation`,
      `One thing helping produce another.`,
      `What explains how this change would improve learning?`,
    ],
    [
      `Correlation`,
      `Two things varying together, without necessarily causing each other.`,
      `Two trends can rise together for a third reason.`,
    ],
    [
      `Credibility`,
      `How much a source deserves trust on a particular question.`,
      `Is this author qualified and using relevant evidence?`,
    ],
    [
      `Citation`,
      `Information that lets others locate a source.`,
      `Record the author, title, date, and link.`,
    ],
    [
      `Paraphrase`,
      `Restating an idea accurately in your own words.`,
      `Keep the original meaning and still name the source.`,
    ],
    [
      `Analogy`,
      `A comparison used to explain or support an idea.`,
      `A team can work like an orchestra, with different roles.`,
    ],
    [
      `False dilemma`,
      `Presenting only two choices when other options exist.`,
      `We can value both cooperation and individual goals.`,
    ],
    [
      `Straw man`,
      `Answering a distorted version of someone’s argument.`,
      `“Less homework” does not mean “no learning.”`,
    ],
    [
      `Ad hominem`,
      `Attacking a person instead of addressing their argument.`,
      `Being new to debate does not make someone’s reasoning wrong.`,
    ],
    [
      `Utilitarianism`,
      `An ethical approach that evaluates actions by their consequences for overall well-being.`,
      `Which choice produces the best overall outcomes?`,
    ],
    [
      `Deontology`,
      `An ethical approach that emphasizes duties and moral rules.`,
      `Some duties may matter even when breaking them seems useful.`,
    ],
    [
      `Impromptu`,
      `Speaking with little preparation about a newly received prompt.`,
      `Choose a topic, organize ideas, then speak.`,
    ],
    [
      `Thesis`,
      `The central point your speech develops.`,
      `Listening is an important kind of leadership.`,
    ],
    [
      `Hook`,
      `An opening intended to get the audience interested.`,
      `Begin with a brief, relevant moment from your life.`,
    ],
    [
      `Transition`,
      `A phrase that connects one idea to the next.`,
      `That brings me to my second reason.`,
    ],
    [
      `PREP`,
      `A practice structure: point, reason, example, point again.`,
      `Say what you think, why, an example, and your takeaway.`,
    ],
  ].map(([e, t, n], r) => ({
    title: e,
    meaning: t,
    example: n,
    category:
      r < 18
        ? `Start here`
        : r < 34
          ? `During the round`
          : r < 45
            ? `Reasoning`
            : `Speaking`,
  })),
  IE = [
    {
      title: `Start here: What is LD?`,
      kind: `Video course`,
      level: `Beginner`,
      url: `https://tobiasjpark.github.io/debate/`,
      text: `Tobias Park’s short lessons cover cases, rebuttals, and questions. Start with lesson 1.1.`,
      note: `Christian homeschool / NCFCA focus. Check your own league’s format; the author flags outdated timing guidance.`,
    },
    {
      title: `Watch: Flowing 101`,
      kind: `YouTube`,
      level: `Next step`,
      url: `https://www.youtube.com/watch?v=6HIIhkVommc`,
      text: `A note-taking lesson linked from DebateDrills. Watch with paper and pause to practice.`,
      note: `Includes circuit/theory vocabulary. Learn the basic note-taking idea before the specialized terms.`,
    },
    {
      title: `Watch: LD Frameworks 101`,
      kind: `YouTube`,
      level: `Next step`,
      url: `https://www.youtube.com/watch?v=6LGo2nCrE-o`,
      text: `A framework lecture linked from DebateDrills, for after you understand value and criterion.`,
      note: `More technical than Rally’s introduction. Watch a section with a coach or parent.`,
    },
    {
      title: `UIL Lincoln–Douglas guide`,
      kind: `Official guide`,
      level: `Student + parent`,
      url: learningSources.uil.url,
      text: `A free guide covering value debate, research, cases, questions, and competition.`,
      note: `UIL-specific rules. Use your event’s handbook for actual tournament requirements.`,
    },
    {
      title: `Speaking on the spot`,
      kind: `Article`,
      level: `Beginner`,
      url: learningSources.toast.url,
      text: `Matt Abrahams explains how to reduce pressure and organize a spontaneous answer.`,
      note: `General speaking advice, not competition rules.`,
    },
    {
      title: `Make practice useful`,
      kind: `Article`,
      level: `Student + parent`,
      url: learningSources.practice.url,
      text: `Toastmasters suggestions for rehearsing aloud and getting more from practice.`,
      note: `Try one technique at a time.`,
    },
    {
      title: `DebateDrills resource shelf`,
      kind: `Lessons + videos`,
      level: `Mixed levels`,
      url: learningSources.drills.url,
      text: `Free LD resources, including arguments, evidence, flowing, and video links.`,
      note: `Some materials are advanced; paid coaching is also offered. Start with basics.`,
    },
    {
      title: `What debaters recommend`,
      kind: `Reddit discussion`,
      level: `Parent browsing`,
      url: learningSources.training.url,
      text: `A parent asks how to help a new LD debater. Replies discuss practice rounds, videos, and speech redos.`,
      note: `Community experiences, not verified coaching or rules. External comments may change.`,
    },
  ],
  LE = [
    [`Question`, `Is it better to be brave or to be kind?`],
    [`Word`, `The unexpected`],
    [`Thought`, `Small steps can lead to big changes.`],
    [`Question`, `What makes someone a good teammate?`],
    [`Word`, `A second chance`],
    [`Thought`, `Being wrong can be the start of learning.`],
    [`Question`, `Should students help choose what they learn?`],
    [`Word`, `Curiosity`],
    [`Thought`, `A good question can matter more than a quick answer.`],
    [`Question`, `Is winning the best measure of success?`],
    [`Word`, `The first step`],
    [`Thought`, `You can disagree and still be friends.`],
    [`Question`, `What can adults learn from kids?`],
    [`Word`, `A detour`],
    [`Thought`, `Listening is a kind of courage.`],
    [`Question`, `Should every student learn a musical instrument?`],
    [`Word`, `Belonging`],
    [`Thought`, `Practice changes what feels possible.`],
    [`Question`, `Is it better to plan or be spontaneous?`],
    [`Word`, `A bridge`],
    [`Thought`, `The easiest choice is not always the best one.`],
    [`Question`, `Can a small act change a community?`],
    [`Word`, `Trust`],
    [`Thought`, `A mistake is something you did, not who you are.`],
    [`Question`, `Should schools have longer breaks outdoors?`],
    [`Word`, `A new beginning`],
    [`Thought`, `Fair does not always mean identical.`],
    [`Question`, `What makes a place feel like home?`],
    [`Word`, `Momentum`],
    [`Thought`, `Teamwork begins when someone listens.`],
    [`Question`, `Is boredom ever useful?`],
    [`Word`, `An open door`],
    [`Thought`, `Confidence can follow action.`],
    [`Question`, `Would you rather invent something or discover something?`],
    [`Word`, `Balance`],
    [`Thought`, `Changing your mind can show strength.`],
    [`Question`, `Should people always finish what they start?`],
    [`Word`, `A quiet leader`],
    [`Thought`, `Progress is not always a straight line.`],
    [`Question`, `What makes a story worth telling?`],
    [`Word`, `Responsibility`],
    [`Thought`, `Different perspectives help us see more.`],
    [`Question`, `Is competition good for friendship?`],
    [`Word`, `Possibility`],
    [`Thought`, `Sometimes the best response is a question.`],
    [`Question`, `What would you teach someone younger than you?`],
    [`Word`, `Resilience`],
    [`Thought`, `A little preparation can make room for creativity.`],
    [`Question`, `Should schools assign group projects?`],
    [`Word`, `An adventure`],
    [`Thought`, `You do not need to be perfect to be understood.`],
    ...PE.map((e) => [`Question`, e.prompt]),
  ],
  RE = {
    prep: [
      {
        name: `Point`,
        hint: `Here is what I think…`,
      },
      {
        name: `Reason`,
        hint: `I think this because…`,
      },
      {
        name: `Example`,
        hint: `For example, one time…`,
      },
      {
        name: `Point again`,
        hint: `That is why… Bring it back to your idea.`,
      },
    ],
    classic: [
      {
        name: `Hook & main idea`,
        hint: `Start with a question or a moment. What is your answer?`,
      },
      {
        name: `First point`,
        hint: `One reason, a specific example, and why it matters.`,
      },
      {
        name: `Second point`,
        hint: `Another reason, a different example, and why it matters.`,
      },
      {
        name: `Close`,
        hint: `Connect both points to the topic. Leave one clear thought.`,
      },
    ],
  },
  zE = [
    {
      short: `AC`,
      name: `Affirmative constructive`,
      minutes: 6,
      side: `Aff`,
      kind: `speech`,
      purpose: `Build the case for the resolution.`,
      aff: `Speak`,
      neg: `Listen + write`,
      guide: `Introduce your value, explain your criterion, and give reasons to affirm. A value is what matters; a criterion is how you decide which side protects it best.`,
      script: `I affirm that schools should prioritize cooperation over competition. My value is fairness. My criterion is meaningful opportunity to learn. First, working together lets students explain ideas to each other. Second, shared goals can include students who rarely finish first.`,
      model: `V: fairness · C: opportunity to learn
1. Peer explanation → learning
2. Shared goals → inclusion`,
      question: `How would you tell whether everyone is learning in a group?`,
    },
    {
      short: `CX`,
      name: `Negative asks questions`,
      minutes: 3,
      side: `Neg`,
      kind: `cx`,
      purpose: `Clarify the affirmative case and test a link.`,
      aff: `Answer`,
      neg: `Ask + note`,
      guide: `The negative asks; the affirmative answers. Ask one short question, listen, then follow up. Jot the useful answer after it lands. Save your argument for your next speech.`,
      script: `NEG: Does cooperation mean that every student contributes equally?
AFF: Not always, but roles can be assigned.
NEG: If one student does the work, has everyone had an opportunity to learn?
AFF: No. Cooperation needs individual responsibility.`,
      model: `Aff concedes: group work needs
individual responsibility.
Use in NC; CX alone is not a rebuttal.`,
      question: `What does that answer let you argue in your next speech?`,
    },
    {
      short: `NC`,
      name: `Negative constructive`,
      minutes: 7,
      side: `Neg`,
      kind: `speech`,
      purpose: `Make your case and answer the affirmative.`,
      aff: `Listen + write`,
      neg: `Speak`,
      guide: `The negative presents a case AND responds to the affirmative. As affirmative, flow short labels, reasons, and impacts. Star your priorities for the four-minute reply.`,
      script: `I negate. I also value fairness, but my criterion is recognizing individual growth. Friendly competition can give students a clear goal and feedback. On their first point, group success does not show that each student understands. In cross-examination they agreed that cooperation needs individual responsibility. On inclusion, competitions can reward improvement rather than just first place.`,
      model: `V: fairness · C: individual growth
Goal + feedback → motivation
A1: group success ≠ understanding
A2: reward improvement, not rank`,
      question: `Why does competition measure individual growth better than a personal goal?`,
    },
    {
      short: `CX`,
      name: `Affirmative asks questions`,
      minutes: 3,
      side: `Aff`,
      kind: `cx`,
      purpose: `Find a useful distinction for your rebuttal.`,
      aff: `Ask + note`,
      neg: `Answer`,
      guide: `The affirmative asks; the negative answers. Use clarification, a test, and a follow-up. You do not need a dramatic “gotcha.” A useful answer is enough.`,
      script: `AFF: Could students set personal goals without competing against classmates?
NEG: Yes, but competition can make goals exciting.
AFF: So a personal goal can still measure growth?
NEG: Yes. My argument is that competition can add motivation.`,
      model: `Neg concedes: personal goals
can measure growth.
Dispute is added motivation.`,
      question: `How will you use the personal-goals answer in the 1AR?`,
    },
    {
      short: `1AR`,
      name: `First affirmative rebuttal`,
      minutes: 4,
      side: `Aff`,
      kind: `speech`,
      purpose: `Answer their case and rebuild your own.`,
      aff: `Speak`,
      neg: `Listen + write`,
      guide: `This is the tight speech: four minutes to answer seven. Signpost by argument. Prioritize the standard and strongest objections; do not spend all your time repeating your opening.`,
      script: `On the standard, fairness should protect opportunities for all students, not only measure individual growth. On motivation, they agreed personal goals can measure growth without competition. On my first point, assigning roles addresses unequal contribution while keeping peer explanation. On inclusion, rewarding improvement helps, but a shared goal lets students succeed together.`,
      model: `Standard: opportunity for all
Motivation: personal goals alternative
A1: roles solve contribution
A2: shared success includes more`,
      question: `Which answer matters most to the value of fairness?`,
    },
    {
      short: `NR`,
      name: `Negative rebuttal`,
      minutes: 6,
      side: `Neg`,
      kind: `speech`,
      purpose: `Compare the clash and give reasons to vote.`,
      aff: `Listen + write`,
      neg: `Speak`,
      guide: `Answer the 1AR and explain why your reasons matter more. Keep extending the arguments you rely on. Do not introduce a brand-new case in the final speeches.`,
      script: `The central question is how to make fairness real for each student. They say roles solve unequal contribution, but a role alone does not show understanding. My individual-growth standard gives each student feedback. Personal goals can work, but friendly competition can add motivation. Prefer my approach when group success hides who still needs help.`,
      model: `Clash: opportunity vs growth
Roles ≠ proof of understanding
Weigh: feedback finds learning gaps`,
      question: `What is the affirmative’s strongest remaining reason?`,
    },
    {
      short: `2AR`,
      name: `Final affirmative rebuttal`,
      minutes: 3,
      side: `Aff`,
      kind: `speech`,
      purpose: `Explain why your strongest reasons win.`,
      aff: `Speak`,
      neg: `Listen + write`,
      guide: `Close the existing debate. Choose the decisive clash, answer the negative’s comparison, and explain why your impact matters more. New reasons are not a substitute for extending earlier ones.`,
      script: `The deciding issue is meaningful opportunity for everyone. We can keep individual responsibility within cooperation, as I explained in the 1AR. They conceded that personal goals measure growth, so competition is not necessary for that benefit. Prioritize cooperation because shared goals and peer explanation reach students who are not motivated by winning.`,
      model: `Extend roles + peer explanation
Personal goals preserve growth
Weigh: opportunity reaches more`,
      question: `How did this ending connect back to the criterion?`,
    },
  ],
  BE = [
    {
      title: `My mind went blank.`,
      feel: `A pause can feel much longer to you than to the audience.`,
      say: `“Let me return to the main idea.” Pause, breathe out, and look at one cue word.`,
      drill: `Pick any topic. Say one point, deliberately pause for three seconds, then give an example.`,
    },
    {
      title: `I don’t know the answer in cross-ex.`,
      feel: `You can be honest and still make a strong argument.`,
      say: `“I don’t have that information. What my argument does show is…” Never invent a fact.`,
      drill: `Have a parent ask a question you cannot answer. Acknowledge the limit, then explain what you do know.`,
    },
    {
      title: `They’re talking faster than I can write.`,
      feel: `A flow is a map, not a transcript.`,
      say: `Write the claim, the reason, and why it matters. Use “b/c,” arrows, and a question mark for a gap.`,
      drill: `Read the NC in the round map. Close it and capture its main points in 20 words.`,
    },
    {
      title: `Four minutes for the 1AR feels impossible.`,
      feel: `You need priorities, not a second opening speech.`,
      say: `“First, the standard. Next, their main argument. Finally, why my case still stands.”`,
      drill: `Choose the two strongest objections from the NC. Give each a 20-second answer; use the final 20 seconds to compare.`,
    },
    {
      title: `Value and criterion sound the same.`,
      feel: `Think destination and measuring stick.`,
      say: `“My value is fairness. My criterion is meaningful opportunity to learn: which side gives more students that opportunity?”`,
      drill: `Name a value. Give one way to measure it. Explain how your argument meets that measure.`,
    },
    {
      title: `How do I actually weigh arguments?`,
      feel: `A judge needs a comparison, not just two good points.`,
      say: `“Even if their benefit happens, mine matters more because…” Compare who is affected, how much, or how likely.`,
      drill: `Compare cooperation’s inclusion benefit with competition’s motivation benefit. Pick a standard and explain which matters more under it.`,
    },
    {
      title: `I didn’t understand their case.`,
      feel: `Clarifying is a debate skill, not a weakness.`,
      say: `“Could you explain how that reason leads to your conclusion?” Then: “So your claim is…?”`,
      drill: `Ask a parent to make an argument. Restate it in your own words and ask one specific clarification.`,
    },
  ];
function VE({ className: e, value: t, ...n }) {
  return (0, R.jsx)(Ab, {
    "data-slot": `progress`,
    value: t,
    className: Nw(
      `relative h-2 w-full overflow-hidden rounded-full bg-primary/20`,
      e,
    ),
    ...n,
    children: (0, R.jsx)(jb, {
      "data-slot": `progress-indicator`,
      className: `h-full w-full flex-1 bg-primary transition-all`,
      style: {
        transform: `translateX(-${100 - (t ?? 0)}%)`,
      },
    }),
  });
}
var HE = (e) =>
  `${Math.floor(Math.max(0, Math.ceil(e)) / 60)}:${String(Math.max(0, Math.ceil(e)) % 60).padStart(2, `0`)}`;
function UE(e) {
  let [t, n] = (0, i.useState)(e),
    [r, a] = (0, i.useState)(!1),
    [o, s] = (0, i.useState)(e),
    c = (0, i.useRef)(0),
    l = (0, i.useRef)(e),
    u = (0, i.useCallback)(() => {
      (c.current &&
        ((l.current = Math.max(0, (c.current - Date.now()) / 1e3)),
        n(l.current)),
        (c.current = 0),
        a(!1));
    }, []),
    d = (0, i.useCallback)(() => {
      l.current <= 0 || ((c.current = Date.now() + l.current * 1e3), a(!0));
    }, []),
    f = (0, i.useCallback)((e) => {
      ((c.current = 0), (l.current = e), s(e), n(e), a(!1));
    }, []),
    p = (0, i.useCallback)(
      () =>
        c.current ? Math.max(0, (c.current - Date.now()) / 1e3) : l.current,
      [],
    );
  return (
    (0, i.useEffect)(() => {
      if (!r) return;
      let e = () => {
        let e = Math.max(0, (c.current - Date.now()) / 1e3);
        ((l.current = e), n(e), e === 0 && ((c.current = 0), a(!1)));
      };
      e();
      let t = setInterval(e, 100);
      return (
        document.addEventListener(`visibilitychange`, e),
        () => {
          (clearInterval(t),
            document.removeEventListener(`visibilitychange`, e));
        }
      );
    }, [r]),
    {
      left: t,
      running: r,
      total: o,
      start: d,
      pause: u,
      reset: f,
      read: p,
    }
  );
}
function WE({ timer: e, label: t, large: n = !1 }) {
  let r = xu(),
    [a, o] = (0, i.useState)(``);
  return (
    (0, i.useEffect)(() => o(``), [t, e.total]),
    (0, i.useEffect)(() => {
      let t = Math.ceil(e.left);
      (t === 0 || t === 30 || t % 60 == 0) &&
        o(t === 0 ? `Time is up. Finish your thought.` : `${HE(t)} remaining`);
    }, [e.left]),
    (0, R.jsxs)(`div`, {
      className: `timer ${n ? `timer-large` : ``}`,
      children: [
        (0, R.jsx)(`div`, {
          className: `eyebrow`,
          children: t,
        }),
        (0, R.jsxs)(`div`, {
          className: `timer-body`,
          children: [
            (0, R.jsxs)(`div`, {
              children: [
                (0, R.jsx)(`div`, {
                  className: `digits`,
                  role: `timer`,
                  "aria-label": `${HE(e.left)} remaining`,
                  children: HE(e.left),
                }),
                (0, R.jsx)(`p`, {
                  className: `small`,
                  children:
                    e.left === 0
                      ? `Time is up. Finish your thought.`
                      : e.running
                        ? `One thought at a time.`
                        : `Ready when you are.`,
                }),
              ],
            }),
            (0, R.jsxs)(`svg`, {
              className: `timer-ring`,
              viewBox: `0 0 120 120`,
              "aria-hidden": `true`,
              children: [
                (0, R.jsx)(`circle`, {
                  cx: `60`,
                  cy: `60`,
                  r: `54`,
                  className: `ring-track`,
                }),
                (0, R.jsx)(Su.circle, {
                  cx: `60`,
                  cy: `60`,
                  r: `54`,
                  pathLength: `1`,
                  className: `ring-fill`,
                  strokeDasharray: `1`,
                  animate: {
                    strokeDashoffset: 1 - (e.total ? e.left / e.total : 0),
                  },
                  transition: {
                    duration: r ? 0 : 0.15,
                  },
                  style: {
                    stroke: e.left <= 30 ? `var(--coral)` : `var(--blue)`,
                  },
                }),
              ],
            }),
          ],
        }),
        (0, R.jsx)(VE, {
          className: `sr-only`,
          value: e.total ? (e.left / e.total) * 100 : 0,
          "aria-label": `Time remaining`,
        }),
        (0, R.jsxs)(`div`, {
          className: `timer-buttons`,
          children: [
            (0, R.jsxs)(`button`, {
              className: `button small-button`,
              onClick: e.running ? e.pause : e.start,
              disabled: e.left === 0,
              children: [
                e.running
                  ? (0, R.jsx)(Ju, {
                      size: 15,
                    })
                  : (0, R.jsx)(Yu, {
                      size: 15,
                    }),
                ` `,
                e.running ? `Pause` : `Start timer`,
              ],
            }),
            (0, R.jsx)(`button`, {
              className: `icon-button`,
              "aria-label": `Reset timer`,
              onClick: () => e.reset(e.total),
              children: (0, R.jsx)(Zu, {
                size: 17,
              }),
            }),
          ],
        }),
        (0, R.jsx)(`span`, {
          className: `sr-only`,
          "aria-live": `polite`,
          children: a,
        }),
      ],
    })
  );
}
function GE() {
  let [e, t] = (0, i.useState)(!1),
    [n, r] = (0, i.useState)(!1),
    [a, o] = (0, i.useState)(`webm`),
    [s, c] = (0, i.useState)(``),
    [l, u] = (0, i.useState)(``),
    d = (0, i.useRef)(null),
    f = (0, i.useRef)(null),
    p = (0, i.useRef)(``),
    m = (0, i.useRef)(!0),
    h = (0, i.useRef)(0),
    g = (0, i.useRef)(0),
    _ = (0, i.useCallback)(() => {
      (h.current++,
        r(!1),
        d.current?.state === `recording` && d.current.stop(),
        f.current?.getTracks().forEach((e) => e.stop()),
        (f.current = null),
        t(!1));
    }, []),
    v = (0, i.useCallback)(() => {
      (g.current++,
        _(),
        p.current && URL.revokeObjectURL(p.current),
        (p.current = ``),
        c(``));
    }, [_]);
  return (
    (0, i.useEffect)(
      () => (
        (m.current = !0),
        () => {
          ((m.current = !1),
            d.current && (d.current.ondataavailable = null),
            d.current?.state === `recording` && d.current.stop(),
            f.current?.getTracks().forEach((e) => e.stop()),
            p.current && URL.revokeObjectURL(p.current));
        }
      ),
      [],
    ),
    {
      recording: e,
      busy: n,
      audio: s,
      extension: a,
      error: l,
      start: async () => {
        if (n || e) return;
        let i = ++h.current;
        (r(!0), u(``));
        try {
          if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder)
            throw Error(`unsupported`);
          let e = await navigator.mediaDevices.getUserMedia({
            audio: !0,
          });
          if (!m.current || i !== h.current) {
            e.getTracks().forEach((e) => e.stop());
            return;
          }
          (p.current && URL.revokeObjectURL(p.current),
            (p.current = ``),
            c(``),
            (f.current = e));
          let n = ++g.current,
            r = new MediaRecorder(e);
          d.current = r;
          let a = [];
          ((r.ondataavailable = (e) => {
            e.data.size && a.push(e.data);
          }),
            (r.onstop = () => {
              if (!m.current || n !== g.current) return;
              o(
                r.mimeType.includes(`mp4`)
                  ? `m4a`
                  : r.mimeType.includes(`ogg`)
                    ? `ogg`
                    : `webm`,
              );
              let e = new Blob(a, {
                type: r.mimeType,
              });
              ((p.current = URL.createObjectURL(e)), c(p.current));
            }),
            r.start(),
            t(!0));
        } catch {
          (f.current?.getTracks().forEach((e) => e.stop()),
            m.current && u(`Mic off — you can still practice.`));
        } finally {
          m.current && i === h.current && r(!1);
        }
      },
      stop: _,
      clear: v,
    }
  );
}
function KE({ recorder: e }) {
  return (0, R.jsxs)(`div`, {
    className: `recording`,
    children: [
      (0, R.jsxs)(`button`, {
        className: `text-button`,
        disabled: e.busy,
        onClick: e.recording ? e.stop : e.start,
        children: [
          e.recording
            ? (0, R.jsx)(ed, {
                size: 16,
              })
            : (0, R.jsx)(Ku, {
                size: 16,
              }),
          ` `,
          e.busy
            ? `Waiting for microphone…`
            : e.recording
              ? `Stop recording`
              : `Record this speech`,
        ],
      }),
      (0, R.jsx)(`p`, {
        className: `small`,
        children: `Recording stays in this tab. Download to keep.`,
      }),
      e.error &&
        (0, R.jsx)(`p`, {
          role: `status`,
          className: `small`,
          children: e.error,
        }),
    ],
  });
}
function qE({ className: e, ...t }) {
  return (0, R.jsx)(Pg, {
    "data-slot": `checkbox`,
    className: Nw(
      `peer size-4 shrink-0 rounded-[4px] border border-input shadow-xs transition-shadow outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:bg-input/30 dark:aria-invalid:ring-destructive/40 dark:data-[state=checked]:bg-primary`,
      e,
    ),
    ...t,
    children: (0, R.jsx)(Ig, {
      "data-slot": `checkbox-indicator`,
      className: `grid place-content-center text-current transition-none`,
      children: (0, R.jsx)(Lu, {
        className: `size-3.5`,
      }),
    }),
  });
}
var JE = [
    {
      src: `/audio/ld-1-eeea0d788eb0.mp3`,
      duration: 20,
      title: `Affirmative constructive`,
      sourceHash: `0d616e2e9c6a2286e145de3d6f23baf66ed935a85f45fa8499caee3451502be5`,
      voices: {
        Aff: `Kayla`,
      },
      model: `inworld-tts-2`,
    },
    {
      src: `/audio/ld-2-4d33929f15f9.mp3`,
      duration: 20,
      title: `Negative asks questions`,
      sourceHash: `adee536c47d89aebdf11589d4961a3e1d90f17203dbe778bfdb5d4f79704b670`,
      voices: {
        Aff: `Kayla`,
        Neg: `Casey`,
      },
      model: `inworld-tts-2`,
    },
    {
      src: `/audio/ld-3-3aa3eb9cfbca.mp3`,
      duration: 27,
      title: `Negative constructive`,
      sourceHash: `4a8c17be30713891bf75822d5596394bc83b6cd312bf88781e7ed8b153959fa1`,
      voices: {
        Neg: `Casey`,
      },
      model: `inworld-tts-2`,
    },
    {
      src: `/audio/ld-4-6f2d2a44268c.mp3`,
      duration: 20,
      title: `Affirmative asks questions`,
      sourceHash: `df460e52d60167091d92ebde563845d89bcead025cd045e5ac0733b3361e30c6`,
      voices: {
        Aff: `Kayla`,
        Neg: `Casey`,
      },
      model: `inworld-tts-2`,
    },
    {
      src: `/audio/ld-5-379b3b868115.mp3`,
      duration: 26,
      title: `First affirmative rebuttal`,
      sourceHash: `193c6cab2bfab63338f8b0b1eb0b8cb700156d78d1b383fc58b87a9af4c10824`,
      voices: {
        Aff: `Kayla`,
      },
      model: `inworld-tts-2`,
    },
    {
      src: `/audio/ld-6-fe34e8933e27.mp3`,
      duration: 22,
      title: `Negative rebuttal`,
      sourceHash: `bdd1d2c301ec2f5b04e819ab9efce8c8f1ebd0af4f5119297276439825f734ad`,
      voices: {
        Neg: `Casey`,
      },
      model: `inworld-tts-2`,
    },
    {
      src: `/audio/ld-7-0a45377e19a2.mp3`,
      duration: 27,
      title: `Final affirmative rebuttal`,
      sourceHash: `91960ee599c648fa950c9db1faae3f50b5f7a5faa15af42e9244650f893b2779`,
      voices: {
        Aff: `Kayla`,
      },
      model: `inworld-tts-2`,
    },
  ],
  YE = [
    {
      label: `THEIR CLAIM`,
      side: `neg`,
      title: `“Competition gives students a goal.”`,
      note: `Listen for the link: does a goal require competition?`,
    },
    {
      label: `YOUR CX QUESTION`,
      side: `aff`,
      title: `“Could students set personal goals without competing?”`,
      note: `Ask one short question. Listen to the whole answer.`,
    },
    {
      label: `THEIR ANSWER`,
      side: `neg`,
      title: `“Yes, but competition can make goals exciting.”`,
      note: `Write: personal goals → growth. They still claim added motivation.`,
    },
    {
      label: `YOUR NEXT SPEECH`,
      side: `aff`,
      title: `“They agreed personal goals can measure growth.”`,
      note: `Use the answer in your rebuttal, then explain why your side is stronger.`,
    },
  ];
function XE({ active: e }) {
  let [t, n] = (0, i.useState)(0),
    [r, a] = (0, i.useState)(!1),
    o = xu();
  ((0, i.useEffect)(() => {
    e || a(!1);
  }, [e]),
    (0, i.useEffect)(() => {
      if (!r) return;
      let e = setTimeout(() => {
        t === 3 ? a(!1) : n((e) => e + 1);
      }, 4e3);
      return () => clearTimeout(e);
    }, [r, t]));
  let s = YE[t];
  return (0, R.jsxs)(`section`, {
    className: `cx-demo`,
    "aria-label": `Cross-examination visual walkthrough`,
    children: [
      (0, R.jsxs)(`div`, {
        className: `demo-top`,
        children: [
          (0, R.jsx)(`span`, {
            className: `eyebrow`,
            children: `A 16-SECOND WALKTHROUGH · ILLUSTRATIVE EXAMPLE`,
          }),
          (0, R.jsxs)(`button`, {
            className: `text-button`,
            onClick: () => {
              (t === 3 && n(0), a(!r));
            },
            children: [
              r
                ? (0, R.jsx)(Ju, {
                    size: 16,
                  })
                : t === 3
                  ? (0, R.jsx)(Zu, {
                      size: 16,
                    })
                  : (0, R.jsx)(Yu, {
                      size: 16,
                    }),
              ` `,
              r ? `Pause` : t === 3 ? `Replay` : `Play example`,
            ],
          }),
        ],
      }),
      (0, R.jsx)(`h3`, {
        children: `Ask now. Use it later.`,
      }),
      (0, R.jsx)(`div`, {
        className: `demo-steps`,
        children: [`Claim`, `Question`, `Answer`, `Rebuttal`].map((e, r) =>
          (0, R.jsxs)(
            `button`,
            {
              className: r === t ? `active` : ``,
              onClick: () => {
                (a(!1), n(r));
              },
              "aria-pressed": r === t,
              children: [r + 1, `. `, e],
            },
            e,
          ),
        ),
      }),
      (0, R.jsx)(`div`, {
        "aria-live": `polite`,
        "aria-atomic": `true`,
        children: (0, R.jsx)(Dc, {
          mode: `wait`,
          children: (0, R.jsxs)(
            Su.div,
            {
              className: `demo-card ${s.side}`,
              initial: {
                opacity: 0,
                y: o ? 0 : 12,
              },
              animate: {
                opacity: 1,
                y: 0,
              },
              exit: {
                opacity: 0,
              },
              transition: {
                duration: o ? 0 : 0.2,
              },
              children: [
                (0, R.jsx)(`span`, {
                  className: `eyebrow`,
                  children: s.label,
                }),
                (0, R.jsx)(`blockquote`, {
                  children: s.title,
                }),
                (0, R.jsx)(`p`, {
                  children: s.note,
                }),
              ],
            },
            t,
          ),
        }),
      }),
      (0, R.jsxs)(`button`, {
        className: `demo-next text-button`,
        disabled: t === 3,
        onClick: () => {
          (a(!1), n((e) => e + 1));
        },
        children: [
          `Next beat `,
          (0, R.jsx)(Pu, {
            size: 16,
          }),
        ],
      }),
    ],
  });
}
function ZE({ side: e, onChange: t }) {
  return (0, R.jsxs)(zw, {
    value: e,
    onValueChange: (e) => t(e === `Aff` ? `Aff` : `Neg`),
    children: [
      (0, R.jsx)(Vw, {
        className: `choice`,
        "aria-label": `Your debate side`,
        children: (0, R.jsx)(Bw, {}),
      }),
      (0, R.jsxs)(Hw, {
        children: [
          (0, R.jsx)(Uw, {
            value: `Aff`,
            children: `I’m affirmative`,
          }),
          (0, R.jsx)(Uw, {
            value: `Neg`,
            children: `I’m negative`,
          }),
        ],
      }),
    ],
  });
}
function QE({ stage: e, active: t }) {
  let n = (0, i.useRef)(null),
    [r, a] = (0, i.useState)(!1),
    o = JE[e];
  return (
    (0, i.useEffect)(() => {
      t || n.current?.pause();
    }, [t]),
    (0, i.useEffect)(() => {
      let e = n.current;
      return () => {
        e?.pause();
      };
    }, []),
    o
      ? (0, R.jsxs)(`section`, {
          className: `reading-player`,
          "aria-label": `${o.title} audio`,
          children: [
            (0, R.jsxs)(`div`, {
              className: `reading-heading`,
              children: [
                (0, R.jsx)(nd, {
                  size: 18,
                }),
                (0, R.jsx)(`strong`, {
                  children: `Listen to the example`,
                }),
                (0, R.jsx)(`span`, {
                  className: `small`,
                  children:
                    zE[e].kind === `cx`
                      ? `Two voices · Affirmative & negative`
                      : `${zE[e].side === `Aff` ? `Affirmative` : `Negative`} voice`,
                }),
              ],
            }),
            (0, R.jsx)(`audio`, {
              ref: n,
              controls: !0,
              preload: `none`,
              src: o.src,
              "aria-label": `Listen to ${o.title}`,
              onError: () => a(!0),
            }),
            (0, R.jsxs)(`div`, {
              className: `reading-options`,
              children: [
                (0, R.jsxs)(`label`, {
                  children: [
                    `Speed `,
                    (0, R.jsxs)(`select`, {
                      "aria-label": `Reading playback speed`,
                      defaultValue: `1`,
                      onChange: (e) => {
                        n.current &&
                          ((n.current.playbackRate = Number(e.target.value)),
                          (n.current.defaultPlaybackRate = Number(
                            e.target.value,
                          )));
                      },
                      children: [
                        (0, R.jsx)(`option`, {
                          value: `0.75`,
                          children: `0.75×`,
                        }),
                        (0, R.jsx)(`option`, {
                          value: `1`,
                          children: `1×`,
                        }),
                        (0, R.jsx)(`option`, {
                          value: `1.25`,
                          children: `1.25×`,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, R.jsx)(`a`, {
                  href: o.src,
                  download: !0,
                  children: `Download MP3`,
                }),
                (0, R.jsxs)(`span`, {
                  children: [`AI-voiced example · `, o.duration, `s`],
                }),
              ],
            }),
            r &&
              (0, R.jsx)(`p`, {
                className: `small`,
                role: `status`,
                children: `Audio could not load. Try the MP3 download, or use the written script.`,
              }),
          ],
        })
      : (0, R.jsx)(`p`, {
          className: `small`,
          children: `Audio is unavailable. The full script is on this page.`,
        })
  );
}
function $E({ active: e, request: t }) {
  let [n, r] = (0, i.useState)(!1),
    [a, o] = (0, i.useState)(`map`),
    [s, c] = (0, i.useState)(0),
    [l, u] = (0, i.useState)(`Aff`),
    [d, f] = (0, i.useState)(!1),
    [p, m] = (0, i.useState)(zE.map(() => [``, ``])),
    [h, g] = (0, i.useState)(zE.map(() => [!1, !1])),
    [_, v] = (0, i.useState)([0, 0]),
    [y, b] = (0, i.useState)(null),
    [x, S] = (0, i.useState)(``),
    [C, w] = (0, i.useState)(!1),
    T = UE(360),
    E = UE(60),
    ee = xu(),
    D = (0, i.useRef)(null);
  (0, i.useEffect)(() => {
    e || (T.pause(), E.pause());
  }, [e, T.pause, E.pause]);
  let O = (e) => {
      (c(e), T.reset(zE[e].minutes * 60));
    },
    k = (e) => {
      (o(e), T.pause(), E.pause());
    };
  (0, i.useEffect)(() => {
    t && (k(t.mode), O(t.stage));
  }, [t]);
  let A = zE[s],
    j = l === `Aff` ? A.aff : A.neg,
    M = (e, t, n) =>
      m((r) =>
        r.map((r, i) => (i === e ? r.map((e, r) => (r === t ? n : e)) : r)),
      ),
    te = () => {
      (m((e) => e.map((e) => [...e, ``])), g((e) => e.map((e) => [...e, !1])));
    };
  return (0, R.jsxs)(`div`, {
    className: `ld-page`,
    children: [
      (0, R.jsxs)(`div`, {
        className: `ld-top`,
        children: [
          (0, R.jsxs)(`div`, {
            children: [
              (0, R.jsx)(`span`, {
                className: `eyebrow`,
                children: `LINCOLN–DOUGLAS / LISTEN · NOTE · RESPOND`,
              }),
              (0, R.jsx)(`h1`, {
                children: `Know your next move.`,
              }),
            ],
          }),
          (0, R.jsx)(ZE, {
            side: l,
            onChange: u,
          }),
        ],
      }),
      (0, R.jsxs)(Pw, {
        value: a,
        onValueChange: k,
        children: [
          (0, R.jsxs)(Iw, {
            variant: `line`,
            className: `ld-tabs`,
            children: [
              (0, R.jsx)(Lw, {
                value: `map`,
                children: `The round map`,
              }),
              (0, R.jsx)(Lw, {
                value: `flow`,
                children: `Practice flowing`,
              }),
              (0, R.jsx)(Lw, {
                value: `tough`,
                children: `The tricky parts`,
              }),
            ],
          }),
          (0, R.jsxs)(Rw, {
            value: `map`,
            children: [
              (0, R.jsx)(`div`, {
                className: `round-track`,
                role: `group`,
                "aria-label": `Choose a round stage`,
                children: zE.map((e, t) =>
                  (0, R.jsxs)(
                    `button`,
                    {
                      className: `round-stop ${s === t ? `active` : ``} ${e.side === `Aff` ? `aff` : `neg`}`,
                      onClick: () => O(t),
                      "aria-pressed": s === t,
                      children: [
                        (0, R.jsxs)(`span`, {
                          className: `eyebrow`,
                          children: [
                            e.side,
                            e.kind === `cx` ? ` asks` : ` speaks`,
                          ],
                        }),
                        (0, R.jsx)(`b`, {
                          children: e.short,
                        }),
                        (0, R.jsxs)(`small`, {
                          children: [e.minutes, `:00`],
                        }),
                      ],
                    },
                    t,
                  ),
                ),
              }),
              (0, R.jsxs)(`div`, {
                className: `round-detail`,
                children: [
                  (0, R.jsxs)(`section`, {
                    children: [
                      (0, R.jsxs)(`span`, {
                        className: `eyebrow ${A.side === `Aff` ? `aff` : `neg`}`,
                        children: [`0`, s + 1, ` / `, A.purpose],
                      }),
                      (0, R.jsx)(
                        Su.h2,
                        {
                          initial: ee
                            ? !1
                            : {
                                opacity: 0.4,
                                y: 5,
                              },
                          animate: {
                            opacity: 1,
                            y: 0,
                          },
                          transition: {
                            duration: 0.2,
                          },
                          children: A.name,
                        },
                        s,
                      ),
                      (0, R.jsxs)(`div`, {
                        className: `role-note`,
                        children: [
                          (0, R.jsxs)(`span`, {
                            children: [
                              `You’re `,
                              l === `Aff` ? `affirmative` : `negative`,
                              `.`,
                            ],
                          }),
                          (0, R.jsx)(`strong`, {
                            children: j,
                          }),
                          (0, R.jsx)(`span`, {
                            children: `·`,
                          }),
                          (0, R.jsx)(`span`, {
                            children:
                              j === `Speak`
                                ? `Your turn. Signpost each point.`
                                : j === `Answer`
                                  ? `Answer briefly and honestly.`
                                  : j === `Ask + note`
                                    ? `Short questions. Save arguments for your speech.`
                                    : `Listen without interrupting.`,
                          }),
                        ],
                      }),
                      (0, R.jsxs)(`div`, {
                        className: `script-block`,
                        children: [
                          (0, R.jsx)(`span`, {
                            className: `eyebrow`,
                            children: `WHAT IT CAN SOUND LIKE`,
                          }),
                          A.script,
                        ],
                      }),
                      (0, R.jsx)(
                        QE,
                        {
                          stage: s,
                          active: e,
                        },
                        `${s}-${a}-${e}`,
                      ),
                      (0, R.jsxs)(`details`, {
                        className: `speech-explainer`,
                        children: [
                          (0, R.jsx)(`summary`, {
                            children: `Why this speech matters`,
                          }),
                          (0, R.jsx)(`p`, {
                            children: A.guide,
                          }),
                          (0, R.jsxs)(`p`, {
                            children: [
                              (0, R.jsx)(`strong`, {
                                children: `Notice:`,
                              }),
                              ` `,
                              A.question,
                            ],
                          }),
                        ],
                      }),
                      (0, R.jsxs)(`div`, {
                        className: `round-nav`,
                        children: [
                          (0, R.jsxs)(`button`, {
                            className: `text-button`,
                            onClick: () => O(s - 1),
                            disabled: s === 0,
                            children: [
                              (0, R.jsx)(Nu, {
                                size: 16,
                              }),
                              ` Previous`,
                            ],
                          }),
                          (0, R.jsxs)(`button`, {
                            className: `text-button`,
                            onClick: () => O(s + 1),
                            disabled: s === 6,
                            children: [
                              `Next part `,
                              (0, R.jsx)(Pu, {
                                size: 16,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, R.jsx)(`aside`, {
                    className: `round-margin`,
                    children: (0, R.jsx)(WE, {
                      timer: T,
                      label: `${A.short} · practice clock`,
                    }),
                  }),
                ],
              }),
              (0, R.jsxs)(`details`, {
                className: `source-note`,
                children: [
                  (0, R.jsx)(`summary`, {
                    children: `About this example & tournament timing`,
                  }),
                  `Illustrative round written for practice — not real evidence. Resolution: schools should prioritize cooperation over competition.`,
                  (0, R.jsx)(`br`, {}),
                  `The common LD sequence is 6–3–7–3–4–6–3, plus 4 minutes of preparation per side, used between speaking turns. Your coach or league may differ. `,
                  (0, R.jsx)(`a`, {
                    href: `https://www.uiltexas.org/speech/new-coach-info/uil-speech-debate-event-overview`,
                    target: `_blank`,
                    rel: `noreferrer`,
                    children: `UIL timing reference ↗`,
                  }),
                ],
              }),
            ],
          }),
          (0, R.jsxs)(Rw, {
            value: `flow`,
            children: [
              (0, R.jsxs)(`div`, {
                className: `flow-intro`,
                children: [
                  (0, R.jsx)(`h2`, {
                    children: `Catch the idea, not every word.`,
                  }),
                  (0, R.jsx)(`p`, {
                    className: `lede`,
                    children: `Listen, then jot keywords in that stage’s column. Follow each argument across the same row.`,
                  }),
                ],
              }),
              (0, R.jsxs)(`div`, {
                className: `flow-toolbar`,
                children: [
                  (0, R.jsxs)(zw, {
                    value: String(s),
                    onValueChange: (e) => O(Number(e)),
                    children: [
                      (0, R.jsx)(Vw, {
                        className: `choice`,
                        "aria-label": `Practice script stage`,
                        children: (0, R.jsx)(Bw, {}),
                      }),
                      (0, R.jsx)(Hw, {
                        children: zE.map((e, t) =>
                          (0, R.jsxs)(
                            Uw,
                            {
                              value: String(t),
                              children: [t + 1, `. `, e.short, ` — `, e.side],
                            },
                            t,
                          ),
                        ),
                      }),
                    ],
                  }),
                  (0, R.jsx)(
                    QE,
                    {
                      stage: s,
                      active: e,
                    },
                    `flow-${s}-${e}`,
                  ),
                  (0, R.jsx)(`button`, {
                    className: `button small-button`,
                    onClick: () => f(!d),
                    "aria-pressed": d,
                    children: d ? `Hide model notes` : `Compare model notes`,
                  }),
                ],
              }),
              (0, R.jsxs)(`details`, {
                className: `flow-example`,
                children: [
                  (0, R.jsx)(`summary`, {
                    children: `Read this stage’s practice script`,
                  }),
                  (0, R.jsx)(`p`, {
                    className: `script-block`,
                    children: A.script,
                  }),
                ],
              }),
              (0, R.jsxs)(`div`, {
                className: `shorthand`,
                children: [
                  (0, R.jsx)(`span`, {
                    className: `small`,
                    children: `Insert into last note:`,
                  }),
                  [`→`, `↑`, `↓`, `≠`, `b/c`, `V:`, `C:`].map((e) =>
                    (0, R.jsx)(
                      `button`,
                      {
                        onClick: () => {
                          let [t, n] = _;
                          (M(t, n, (p[t][n] || ``) + e + ` `),
                            D.current
                              ?.querySelector(`[data-cell="${t}-${n}"]`)
                              ?.focus());
                        },
                        "aria-label": `Insert ${e}`,
                        children: e,
                      },
                      e,
                    ),
                  ),
                ],
              }),
              (0, R.jsx)(`div`, {
                className: `flow-scroll`,
                tabIndex: 0,
                "aria-label": `Flow sheet; scroll horizontally for later speeches`,
                ref: D,
                children: (0, R.jsx)(`div`, {
                  className: `flow-grid`,
                  children: zE.map((e, t) =>
                    (0, R.jsxs)(
                      `div`,
                      {
                        className: `flow-col`,
                        children: [
                          (0, R.jsxs)(`div`, {
                            id: `flow-head-${t}`,
                            className: `flow-col-head ${e.side === `Aff` ? `aff` : `neg`}`,
                            children: [
                              (0, R.jsxs)(`b`, {
                                children: [e.short, ` · `, e.minutes, `:00`],
                              }),
                              (0, R.jsx)(`small`, {
                                children:
                                  e.kind === `cx`
                                    ? `${e.side} asks · answer notes`
                                    : `${e.side} speaks`,
                              }),
                            ],
                          }),
                          p[t].map((n, r) =>
                            (0, R.jsxs)(
                              `div`,
                              {
                                className: `flow-cell ${h[t][r] ? `thread-marked` : ``}`,
                                children: [
                                  (0, R.jsx)(`label`, {
                                    className: `eyebrow`,
                                    htmlFor: `flow-${t}-${r}`,
                                    children:
                                      e.kind === `cx`
                                        ? `Answer ${r + 1}`
                                        : `Argument ${r + 1}`,
                                  }),
                                  (0, R.jsx)(`textarea`, {
                                    id: `flow-${t}-${r}`,
                                    "data-cell": `${t}-${r}`,
                                    "aria-describedby": `flow-head-${t}`,
                                    value: n,
                                    onFocus: () => v([t, r]),
                                    onChange: (e) => M(t, r, e.target.value),
                                    placeholder:
                                      r === 0
                                        ? e.kind === `cx`
                                          ? `A useful answer…`
                                          : `Claim → reason → why it matters…`
                                        : `Another idea…`,
                                    onKeyDown: (e) => {
                                      if (
                                        (e.key === `Enter` &&
                                          !e.shiftKey &&
                                          (e.preventDefault(),
                                          r === p[t].length - 1 && te(),
                                          setTimeout(
                                            () =>
                                              D.current
                                                ?.querySelector(
                                                  `[data-cell="${t}-${r + 1}"]`,
                                                )
                                                ?.focus(),
                                            0,
                                          )),
                                        e.altKey &&
                                          (e.key === `ArrowRight` ||
                                            e.key === `ArrowLeft`))
                                      ) {
                                        e.preventDefault();
                                        let n =
                                          t + (e.key === `ArrowRight` ? 1 : -1);
                                        D.current
                                          ?.querySelector(
                                            `[data-cell="${n}-${r}"]`,
                                          )
                                          ?.focus();
                                      }
                                    },
                                  }),
                                  (0, R.jsxs)(`label`, {
                                    className: `thread-toggle`,
                                    children: [
                                      (0, R.jsx)(qE, {
                                        checked: h[t][r],
                                        onCheckedChange: (e) =>
                                          g((n) =>
                                            n.map((n, i) =>
                                              i === t
                                                ? n.map((t, n) =>
                                                    n === r ? e === !0 : t,
                                                  )
                                                : n,
                                            ),
                                          ),
                                      }),
                                      `Something to answer`,
                                    ],
                                  }),
                                ],
                              },
                              r,
                            ),
                          ),
                          (0, R.jsx)(Dc, {
                            children:
                              d &&
                              (0, R.jsxs)(Su.div, {
                                className: `flow-answer`,
                                initial: {
                                  opacity: 0,
                                  x: ee ? 0 : 12,
                                },
                                animate: {
                                  opacity: 1,
                                  x: 0,
                                },
                                exit: {
                                  opacity: 0,
                                },
                                children: [
                                  (0, R.jsx)(`span`, {
                                    className: `eyebrow`,
                                    children: `MODEL NOTES · COMPARE YOURSELF`,
                                  }),
                                  e.model,
                                ],
                              }),
                          }),
                        ],
                      },
                      t,
                    ),
                  ),
                }),
              }),
              (0, R.jsxs)(`div`, {
                className: `flow-toolbar`,
                children: [
                  (0, R.jsxs)(`button`, {
                    className: `text-button`,
                    onClick: te,
                    children: [
                      (0, R.jsx)(Xu, {
                        size: 16,
                      }),
                      ` Add argument row`,
                    ],
                  }),
                  (0, R.jsx)(`p`, {
                    className: `small`,
                    children: `Enter: next row · Shift+Enter: new line · Alt+←/→: another column.`,
                  }),
                ],
              }),
              (0, R.jsx)(`p`, {
                className: `small`,
                children: `The dotted mark is yours: something you still want to answer. Model notes show one way to condense the script, not an automatic score. Flow notes remain in this page until reload.`,
              }),
              (0, R.jsx)(`p`, {
                className: `source-note`,
                children: `Illustrative practice, not real evidence. In a real round, support factual claims with sources you have actually checked.`,
              }),
            ],
          }),
          (0, R.jsxs)(Rw, {
            value: `tough`,
            children: [
              (0, R.jsxs)(`div`, {
                className: `flow-intro`,
                children: [
                  (0, R.jsx)(`h2`, {
                    children: `When the round gets tricky.`,
                  }),
                  (0, R.jsx)(`p`, {
                    className: `lede`,
                    children: `You don’t need a perfect comeback. You need a next move.`,
                  }),
                ],
              }),
              (0, R.jsx)(`div`, {
                className: `tough-list`,
                children: BE.map((e, t) =>
                  (0, R.jsxs)(
                    `div`,
                    {
                      className: `tough-item`,
                      children: [
                        (0, R.jsxs)(`button`, {
                          className: `tough-trigger`,
                          "aria-expanded": y === t,
                          "aria-controls": `spot-${t}`,
                          onClick: () => {
                            (E.reset(60), b(y === t ? null : t));
                          },
                          children: [
                            (0, R.jsxs)(`span`, {
                              children: [`0`, t + 1],
                            }),
                            e.title,
                            y === t
                              ? (0, R.jsx)(qu, {
                                  size: 18,
                                })
                              : (0, R.jsx)(Xu, {
                                  size: 18,
                                }),
                          ],
                        }),
                        (0, R.jsx)(Dc, {
                          children:
                            y === t &&
                            (0, R.jsxs)(Su.div, {
                              id: `spot-${t}`,
                              className: `tough-body`,
                              initial: {
                                opacity: 0,
                                height: ee ? `auto` : 0,
                              },
                              animate: {
                                opacity: 1,
                                height: `auto`,
                              },
                              exit: {
                                opacity: 0,
                                height: ee ? `auto` : 0,
                              },
                              children: [
                                (0, R.jsx)(`p`, {
                                  className: `small`,
                                  children: e.feel,
                                }),
                                (0, R.jsx)(`blockquote`, {
                                  children: e.say,
                                }),
                                (0, R.jsxs)(`div`, {
                                  className: `drill-line`,
                                  children: [
                                    (0, R.jsxs)(`p`, {
                                      children: [
                                        (0, R.jsx)(`span`, {
                                          className: `eyebrow`,
                                          children: `TRY A 60-SECOND REP`,
                                        }),
                                        (0, R.jsx)(`br`, {}),
                                        e.drill,
                                      ],
                                    }),
                                    (0, R.jsx)(`span`, {
                                      className: `drill-clock`,
                                      role: `timer`,
                                      "aria-label": `${HE(E.left)} remaining`,
                                      children: HE(E.left),
                                    }),
                                    (0, R.jsxs)(`button`, {
                                      className: `button small-button`,
                                      onClick: () => {
                                        E.left === 0
                                          ? E.reset(60)
                                          : E.running
                                            ? E.pause()
                                            : E.start();
                                      },
                                      children: [
                                        E.running
                                          ? (0, R.jsx)(Ju, {
                                              size: 14,
                                            })
                                          : (0, R.jsx)(Yu, {
                                              size: 14,
                                            }),
                                        ` `,
                                        E.left === 0
                                          ? `Reset`
                                          : E.running
                                            ? `Pause`
                                            : `Start rep`,
                                      ],
                                    }),
                                  ],
                                }),
                                E.left === 0 &&
                                  (0, R.jsx)(`p`, {
                                    role: `status`,
                                    className: `small`,
                                    children: `That’s a rep. What is one thing you would keep?`,
                                  }),
                              ],
                            }),
                        }),
                      ],
                    },
                    e.title,
                  ),
                ),
              }),
              (0, R.jsxs)(`details`, {
                className: `cx-lesson`,
                onToggle: (e) => r(e.currentTarget.open),
                children: [
                  (0, R.jsx)(`summary`, {
                    children: `08 · How do I turn a question into a rebuttal?`,
                  }),
                  (0, R.jsx)(XE, {
                    active: e && n,
                  }),
                  (0, R.jsxs)(`div`, {
                    className: `cx-practice`,
                    children: [
                      (0, R.jsx)(`span`, {
                        className: `eyebrow`,
                        children: `A QUICK CROSS-EX REP`,
                      }),
                      (0, R.jsx)(`h2`, {
                        style: {
                          marginTop: 12,
                        },
                        children: `Find the question that helps.`,
                      }),
                      (0, R.jsx)(`p`, {
                        children: `They say: “Competition is necessary because it gives students a goal.” Which question best tests that connection?`,
                      }),
                      (0, R.jsx)(Kw, {
                        value: x,
                        onValueChange: (e) => {
                          (S(e), w(!1));
                        },
                        className: `radio-options`,
                        "aria-label": `Choose a cross-examination question`,
                        children: [
                          [`a`, `“Why is your entire case wrong?”`],
                          [
                            `b`,
                            `“Can students set a goal without competing against someone?”`,
                          ],
                          [`c`, `“Don’t you agree cooperation is better?”`],
                        ].map(([e, t]) =>
                          (0, R.jsxs)(
                            `label`,
                            {
                              className: `radio-option`,
                              children: [
                                (0, R.jsx)(qw, {
                                  value: e,
                                }),
                                t,
                              ],
                            },
                            e,
                          ),
                        ),
                      }),
                      (0, R.jsxs)(`button`, {
                        className: `text-button`,
                        disabled: !x,
                        onClick: () => w(!0),
                        children: [
                          `Think it through `,
                          (0, R.jsx)(Pu, {
                            size: 16,
                          }),
                        ],
                      }),
                      C &&
                        (0, R.jsxs)(`div`, {
                          className: `cx-result`,
                          children: [
                            (0, R.jsx)(`h3`, {
                              children:
                                x === `b`
                                  ? `That tests the connection.`
                                  : `Try a question with a narrower target.`,
                            }),
                            (0, R.jsx)(`p`, {
                              children: `Ask whether goals require competition. If the answer is no, your next speech can say: “Their goal-setting benefit can happen without competition.” Ask now, explain the importance later.`,
                            }),
                          ],
                        }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function eD(e, t) {
  let n = (0, i.useRef)({
    tab: e,
    entryCount: t,
  });
  ((n.current = {
    tab: e,
    entryCount: t,
  }),
    (0, i.useEffect)(() => {
      let e = document.modelContext;
      if (!e?.registerTool) return;
      let t = new AbortController();
      try {
        Promise.resolve(
          e.registerTool(
            {
              name: `read_practice_overview`,
              title: `Read practice overview`,
              description: `Read the current practice area and saved reflection count. Does not start a timer, record audio, or change notes.`,
              inputSchema: {
                type: `object`,
                properties: {},
                additionalProperties: !1,
              },
              annotations: {
                readOnlyHint: !0,
                untrustedContentHint: !1,
              },
              execute(e) {
                if (
                  typeof e != `object` ||
                  !e ||
                  Array.isArray(e) ||
                  Object.keys(e).length
                )
                  throw Error(`Expected an empty object.`);
                return {
                  ...n.current,
                };
              },
            },
            {
              signal: t.signal,
            },
          ),
        ).catch(() => {});
      } catch {}
      return () => t.abort();
    }, []));
}
var tD = {
  spot: `/images/your-spot.png`,
  flow: `/images/the-flow.png`,
};
function Dashboard({
  onNavigate: e,
  onStart: t,
  onRound: n,
  focus: r,
  entryCount: i,
}) {
  let a = xu();
  return (0, R.jsxs)(`div`, {
    className: `dashboard zine-home welcome-home`,
    children: [
      (0, R.jsxs)(`section`, {
        className: `welcome-band`,
        "aria-labelledby": `welcome-title`,
        children: [
          (0, R.jsx)(`span`, {
            className: `eyebrow`,
            children: `DEBATE PRACTICE FOR STUDENTS`,
          }),
          (0, R.jsx)(`h1`, {
            id: `welcome-title`,
            children: `Debate with confidence.`,
          }),
          (0, R.jsx)(`p`, {
            children: `Practice speaking, asking questions, and making your case—one small step at a time.`,
          }),
          (0, R.jsx)(`div`, {
            className: `welcome-actions`,
            children: (0, R.jsxs)(Su.button, {
              className: `button primary`,
              onClick: t,
              whileHover: a
                ? {}
                : {
                    y: -2,
                  },
              children: [
                `Start a 2-minute talk `,
                (0, R.jsx)(Pu, {
                  size: 18,
                }),
              ],
            }),
          }),
        ],
      }),
      (0, R.jsxs)(`section`, {
        className: `practice-paths`,
        "aria-label": `Two ways to practice`,
        children: [
          (0, R.jsxs)(Su.article, {
            className: `path-card`,
            "data-path": `impromptu`,
            initial: a
              ? !1
              : {
                  opacity: 0,
                  y: 10,
                },
            animate: {
              opacity: 1,
              y: 0,
            },
            transition: {
              duration: 0.3,
            },
            whileHover: a
              ? {}
              : {
                  y: -3,
                },
            children: [
              (0, R.jsxs)(`div`, {
                className: `path-copy`,
                children: [
                  (0, R.jsx)(`span`, {
                    className: `eyebrow`,
                    children: `IMPROMPTU`,
                  }),
                  (0, R.jsx)(`h2`, {
                    children: (0, R.jsx)(`button`, {
                      onClick: t,
                      children: `Practice a short speech.`,
                    }),
                  }),
                  (0, R.jsx)(`p`, {
                    children: `Pick a topic. Plan your ideas. Give a short speech.`,
                  }),
                ],
              }),
              (0, R.jsxs)(`button`, {
                className: `path-art`,
                onClick: t,
                "aria-label": `Choose an impromptu topic`,
                children: [
                  (0, R.jsx)(`img`, {
                    src: tD.spot,
                    alt: `Paper collage of a microphone waiting on a school stage`,
                  }),
                  (0, R.jsxs)(`span`, {
                    className: `image-sticker`,
                    children: [`THE FLOOR`, (0, R.jsx)(`br`, {}), `IS YOURS.`],
                  }),
                ],
              }),
              (0, R.jsxs)(`div`, {
                className: `path-tools`,
                children: [
                  (0, R.jsx)(`span`, {
                    className: `path-meta`,
                    children: `1 MIN PLAN · 2 MIN TALK`,
                  }),
                  (0, R.jsx)(`p`, {
                    className: `path-hint`,
                    children: `A simple place to start.`,
                  }),
                  (0, R.jsxs)(Su.button, {
                    className: `button primary`,
                    onClick: t,
                    whileHover: a
                      ? {}
                      : {
                          y: -2,
                        },
                    children: [
                      `Pick a topic `,
                      (0, R.jsx)(Pu, {
                        size: 17,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, R.jsxs)(Su.article, {
            className: `path-card`,
            "data-path": `ld`,
            initial: a
              ? !1
              : {
                  opacity: 0,
                  y: 10,
                },
            animate: {
              opacity: 1,
              y: 0,
            },
            transition: {
              duration: 0.3,
              delay: 0.06,
            },
            whileHover: a
              ? {}
              : {
                  y: -3,
                },
            children: [
              (0, R.jsxs)(`div`, {
                className: `path-copy`,
                children: [
                  (0, R.jsx)(`span`, {
                    className: `eyebrow`,
                    children: `LINCOLN–DOUGLAS`,
                  }),
                  (0, R.jsx)(`h2`, {
                    children: (0, R.jsx)(`button`, {
                      onClick: () => n(`map`),
                      children: `Learn one-on-one debate.`,
                    }),
                  }),
                  (0, R.jsx)(`p`, {
                    children: `Learn when to speak, what to ask, and how to take notes.`,
                  }),
                ],
              }),
              (0, R.jsxs)(`button`, {
                className: `path-art`,
                onClick: () => n(`map`),
                "aria-label": `Explore a Lincoln–Douglas round`,
                children: [
                  (0, R.jsx)(`img`, {
                    src: tD.flow,
                    alt: `A notebook with two columns and arrows connecting opposing ideas`,
                    loading: `lazy`,
                  }),
                  (0, R.jsx)(`span`, {
                    className: `art-caption`,
                    children: `LISTEN → NOTE → RESPOND`,
                  }),
                ],
              }),
              (0, R.jsx)(`div`, {
                className: `path-tools`,
                children: (0, R.jsxs)(`div`, {
                  className: `feature-actions`,
                  children: [
                    (0, R.jsxs)(Su.button, {
                      className: `button`,
                      onClick: () => n(`map`),
                      whileHover: a
                        ? {}
                        : {
                            y: -2,
                          },
                      children: [
                        `Explore the round `,
                        (0, R.jsx)(Pu, {
                          size: 17,
                        }),
                      ],
                    }),
                    (0, R.jsx)(`button`, {
                      className: `text-button`,
                      onClick: () => n(`flow`),
                      children: `Practice taking notes`,
                    }),
                  ],
                }),
              }),
            ],
          }),
        ],
      }),
      (0, R.jsxs)(`button`, {
        className: `tricky-band`,
        onClick: () => n(`tough`),
        children: [
          (0, R.jsx)(`strong`, {
            children: `Need a little help?`,
          }),
          (0, R.jsxs)(`span`, {
            children: [
              `Get a quick tip `,
              (0, R.jsx)(Pu, {
                size: 19,
              }),
            ],
          }),
        ],
      }),
      (0, R.jsxs)(`button`, {
        className: `library-invite`,
        onClick: () => e(`learn`),
        children: [
          (0, R.jsx)(Iu, {
            size: 22,
          }),
          (0, R.jsxs)(`span`, {
            children: [
              (0, R.jsx)(`strong`, {
                children: `Build your debate toolkit.`,
              }),
              (0, R.jsx)(`small`, {
                children: `20 tips · 50 topics · 50 words · Videos & guides`,
              }),
            ],
          }),
          (0, R.jsx)(Pu, {
            size: 20,
          }),
        ],
      }),
      (0, R.jsxs)(`section`, {
        className: `welcome-closing`,
        "aria-label": `Your notebook and practicing together`,
        children: [
          (0, R.jsxs)(`div`, {
            children: [
              (0, R.jsx)(`span`, {
                className: `eyebrow`,
                children: `YOUR NOTEBOOK`,
              }),
              i
                ? (0, R.jsxs)(`p`, {
                    children: [
                      (0, R.jsx)(`strong`, {
                        children: `Next time:`,
                      }),
                      ` `,
                      r || `Keep building on what worked.`,
                    ],
                  })
                : (0, R.jsx)(`p`, {
                    children: `Your notebook fills in after your first talk.`,
                  }),
              (0, R.jsxs)(`button`, {
                className: `notebook-jump`,
                onClick: () => e(`notebook`),
                children: [
                  (0, R.jsx)(Iu, {
                    size: 17,
                  }),
                  `Open notebook`,
                  i > 0 ? ` (${i})` : ``,
                  (0, R.jsx)(Pu, {
                    size: 17,
                  }),
                ],
              }),
            ],
          }),
          (0, R.jsxs)(`div`, {
            children: [
              (0, R.jsx)(`span`, {
                className: `eyebrow`,
                children: `PRACTICING WITH A PARENT?`,
              }),
              (0, R.jsx)(`p`, {
                children: `No debate experience needed. Listen to a practice speech, then help pick one thing to try next.`,
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function rD({ draw: e, onChoose: t, onRedraw: n }) {
  let r = xu(),
    a = (0, i.useRef)(null),
    o = (0, i.useRef)(null),
    [s, c] = (0, i.useState)(0),
    [l, u] = (0, i.useState)(0);
  return (
    (0, i.useLayoutEffect)(() => {
      o.current !== null &&
        (window.scrollTo({
          top: o.current,
          behavior: `instant`,
        }),
        (o.current = null));
    }, [e]),
    (0, R.jsxs)(R.Fragment, {
      children: [
        (0, R.jsx)(`div`, {
          ref: a,
          className: `topic-list topic-deck`,
          style: {
            minHeight: s,
          },
          children: e.map((e, n) =>
            (0, R.jsxs)(
              Su.button,
              {
                type: `button`,
                className: `topic-row`,
                onClick: () => t(e),
                whileHover: r
                  ? {}
                  : {
                      x: 3,
                    },
                whileTap: r
                  ? {}
                  : {
                      scale: 0.995,
                    },
                children: [
                  (0, R.jsxs)(`span`, {
                    className: `hanging`,
                    children: [`0`, n + 1],
                  }),
                  (0, R.jsx)(
                    Su.span,
                    {
                      className: `topic-copy`,
                      initial: r
                        ? !1
                        : {
                            opacity: 0,
                            y: 6,
                          },
                      animate: {
                        opacity: 1,
                        y: 0,
                      },
                      transition: {
                        duration: 0.22,
                        delay: r ? 0 : n * 0.045,
                      },
                      children: LE[e][1],
                    },
                    e,
                  ),
                  (0, R.jsx)(`span`, {
                    className: `topic-kind`,
                    children: LE[e][0],
                  }),
                  (0, R.jsxs)(`span`, {
                    className: `pick-topic`,
                    children: [
                      `Pick this `,
                      (0, R.jsx)(Pu, {
                        size: 17,
                      }),
                    ],
                  }),
                ],
              },
              n,
            ),
          ),
        }),
        (0, R.jsxs)(`button`, {
          type: `button`,
          className: `text-button redraw`,
          onClick: () => {
            ((o.current = window.scrollY),
              c((e) =>
                Math.max(e, a.current?.getBoundingClientRect().height ?? 0),
              ),
              u((e) => e + 1),
              n());
          },
          children: [
            (0, R.jsx)(Su.span, {
              className: `redraw-icon`,
              animate: {
                rotate: r ? 0 : l * 180,
              },
              transition: {
                duration: 0.35,
                ease: `easeOut`,
              },
              children: (0, R.jsx)(Zu, {
                size: 16,
              }),
            }),
            ` Draw 3 new topics`,
          ],
        }),
        (0, R.jsx)(`span`, {
          className: `sr-only`,
          role: `status`,
          children: l > 0 ? `Three new topics are ready.` : ``,
        }),
      ],
    })
  );
}
function LearnLibrary({ onPractice: e }) {
  let [t, n] = (0, i.useState)(`tips`),
    [r, a] = (0, i.useState)(``),
    [o, s] = (0, i.useState)(`All`),
    [c, l] = (0, i.useState)(10),
    u = xu(),
    d = t === `tips` ? NE : t === `topics` ? PE : FE,
    f = [`All`, ...new Set(d.map((e) => e.category))],
    p = (e) =>
      e
        .toLowerCase()
        .replace(/[’‘]/g, `'`)
        .replace(/[–—-]/g, ` `)
        .replace(/\s+/g, ` `)
        .trim(),
    m = (e) => {
      let t = p(r);
      return [
        e.title,
        e.category,
        e.meaning,
        e.drill,
        e.prompt,
        e.consider,
        e.example,
      ]
        .filter(Boolean)
        .some((e) => p(e || ``).includes(t === `ld` ? `lincoln douglas` : t));
    },
    h = d.filter((e) => (o === `All` || e.category === o) && m(e));
  return (0, R.jsxs)(`div`, {
    className: `library-page`,
    children: [
      (0, R.jsxs)(`header`, {
        className: `library-heading`,
        children: [
          (0, R.jsx)(`span`, {
            className: `eyebrow`,
            children: `THE RALLY PLAYBOOK`,
          }),
          (0, R.jsxs)(`h1`, {
            children: [
              `A little knowledge.`,
              (0, R.jsx)(`br`, {}),
              `A lot more confidence.`,
            ],
          }),
          (0, R.jsx)(`p`, {
            children: `Learn one thing. Try it out loud. Come back for the next.`,
          }),
        ],
      }),
      (0, R.jsxs)(Pw, {
        value: t,
        onValueChange: (e) => {
          (n(e), s(`All`), a(``), l(10));
        },
        children: [
          (0, R.jsxs)(Iw, {
            className: `library-tabs`,
            children: [
              (0, R.jsx)(Lw, {
                value: `tips`,
                children: `20 tips`,
              }),
              (0, R.jsx)(Lw, {
                value: `topics`,
                children: `50 topics`,
              }),
              (0, R.jsx)(Lw, {
                value: `words`,
                children: `50 words`,
              }),
              (0, R.jsx)(Lw, {
                value: `resources`,
                children: `Watch & read`,
              }),
            ],
          }),
          t !== `resources` &&
            (0, R.jsxs)(`div`, {
              className: `library-tools`,
              children: [
                (0, R.jsxs)(`label`, {
                  className: `library-search`,
                  children: [
                    (0, R.jsx)(Qu, {
                      size: 18,
                    }),
                    (0, R.jsxs)(`span`, {
                      className: `sr-only`,
                      children: [`Search `, t],
                    }),
                    (0, R.jsx)(`input`, {
                      value: r,
                      onChange: (e) => {
                        (a(e.target.value), l(10));
                      },
                      placeholder: `Find ${t === `words` ? `a word` : t === `topics` ? `a topic` : `a tip`}…`,
                    }),
                  ],
                }),
                (0, R.jsxs)(`label`, {
                  className: `library-filter`,
                  children: [
                    `Category`,
                    (0, R.jsx)(`select`, {
                      value: o,
                      onChange: (e) => {
                        (s(e.target.value), l(10));
                      },
                      children: f.map((e) =>
                        (0, R.jsx)(
                          `option`,
                          {
                            children: e,
                          },
                          e,
                        ),
                      ),
                    }),
                  ],
                }),
              ],
            }),
          (0, R.jsxs)(Rw, {
            value: `tips`,
            children: [
              (0, R.jsx)(`p`, {
                className: `library-note`,
                children: `20 useful starting points, selected from debate discussions and teaching resources. Community tips are experiences—not official rules. The practice drills are Rally’s adaptations.`,
              }),
              (0, R.jsx)(`div`, {
                className: `library-list`,
                children: NE.filter(
                  (e) => (o === `All` || e.category === o) && m(e),
                )
                  .slice(0, c)
                  .map((e) =>
                    (0, R.jsxs)(
                      `details`,
                      {
                        className: `library-item`,
                        children: [
                          (0, R.jsxs)(`summary`, {
                            children: [
                              (0, R.jsx)(`span`, {
                                className: `library-number`,
                                children: String(NE.indexOf(e) + 1).padStart(
                                  2,
                                  `0`,
                                ),
                              }),
                              (0, R.jsxs)(`span`, {
                                children: [
                                  (0, R.jsx)(`small`, {
                                    children: e.category,
                                  }),
                                  (0, R.jsx)(`strong`, {
                                    children: e.title,
                                  }),
                                ],
                              }),
                              (0, R.jsx)(`span`, {
                                className: `expand-mark`,
                                children: `+`,
                              }),
                            ],
                          }),
                          (0, R.jsxs)(`div`, {
                            className: `library-body`,
                            children: [
                              (0, R.jsx)(`p`, {
                                children: e.meaning,
                              }),
                              (0, R.jsxs)(`div`, {
                                className: `try-this`,
                                children: [
                                  (0, R.jsx)(`span`, {
                                    className: `eyebrow`,
                                    children: `TRY THIS`,
                                  }),
                                  (0, R.jsx)(`p`, {
                                    children: e.drill,
                                  }),
                                ],
                              }),
                              (0, R.jsxs)(`a`, {
                                href: e.source.url,
                                target: `_blank`,
                                rel: `noreferrer`,
                                children: [
                                  e.source.label,
                                  ` `,
                                  (0, R.jsx)(Fu, {
                                    size: 14,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      e.title,
                    ),
                  ),
              }),
            ],
          }),
          (0, R.jsxs)(Rw, {
            value: `topics`,
            children: [
              (0, R.jsx)(`p`, {
                className: `library-note`,
                children: `50 starter themes to understand and practice. These are original practice prompts, not a ranking or current tournament resolutions. Consider both sides; research factual claims before using them in a round.`,
              }),
              (0, R.jsx)(`div`, {
                className: `library-list`,
                children: PE.filter(
                  (e) => (o === `All` || e.category === o) && m(e),
                )
                  .slice(0, c)
                  .map((t) =>
                    (0, R.jsxs)(
                      `details`,
                      {
                        className: `library-item`,
                        children: [
                          (0, R.jsxs)(`summary`, {
                            children: [
                              (0, R.jsx)(`span`, {
                                className: `library-number`,
                                children: String(PE.indexOf(t) + 1).padStart(
                                  2,
                                  `0`,
                                ),
                              }),
                              (0, R.jsxs)(`span`, {
                                children: [
                                  (0, R.jsx)(`small`, {
                                    children: t.category,
                                  }),
                                  (0, R.jsx)(`strong`, {
                                    children: t.title,
                                  }),
                                ],
                              }),
                              (0, R.jsx)(`span`, {
                                className: `expand-mark`,
                                children: `+`,
                              }),
                            ],
                          }),
                          (0, R.jsxs)(`div`, {
                            className: `library-body`,
                            children: [
                              (0, R.jsx)(`p`, {
                                children: t.meaning,
                              }),
                              (0, R.jsxs)(`div`, {
                                className: `try-this`,
                                children: [
                                  (0, R.jsx)(`span`, {
                                    className: `eyebrow`,
                                    children: `THINK ABOUT BOTH SIDES`,
                                  }),
                                  (0, R.jsx)(`h3`, {
                                    children: t.prompt,
                                  }),
                                  (0, R.jsx)(`p`, {
                                    children: t.consider,
                                  }),
                                ],
                              }),
                              (0, R.jsxs)(Su.button, {
                                className: `button primary`,
                                onClick: () => e(t.prompt),
                                whileHover: u
                                  ? {}
                                  : {
                                      x: 2,
                                    },
                                children: [
                                  `Practice this topic `,
                                  (0, R.jsx)(Pu, {
                                    size: 17,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      t.title,
                    ),
                  ),
              }),
            ],
          }),
          (0, R.jsxs)(Rw, {
            value: `words`,
            children: [
              (0, R.jsx)(`p`, {
                className: `library-note`,
                children: `Plain-language explanations with examples. Try the “Start here” category first. You do not need to memorize all 50 before your first round. Terminology and judging expectations vary by league.`,
              }),
              (0, R.jsx)(`div`, {
                className: `library-list`,
                children: FE.filter(
                  (e) => (o === `All` || e.category === o) && m(e),
                )
                  .slice(0, c)
                  .map((e) =>
                    (0, R.jsxs)(
                      `details`,
                      {
                        className: `library-item`,
                        children: [
                          (0, R.jsxs)(`summary`, {
                            children: [
                              (0, R.jsx)(`span`, {
                                className: `library-number`,
                                children: (0, R.jsx)(Iu, {
                                  size: 17,
                                }),
                              }),
                              (0, R.jsxs)(`span`, {
                                children: [
                                  (0, R.jsx)(`small`, {
                                    children: e.category,
                                  }),
                                  (0, R.jsx)(`strong`, {
                                    children: e.title,
                                  }),
                                ],
                              }),
                              (0, R.jsx)(`span`, {
                                className: `expand-mark`,
                                children: `+`,
                              }),
                            ],
                          }),
                          (0, R.jsxs)(`div`, {
                            className: `library-body`,
                            children: [
                              (0, R.jsx)(`p`, {
                                children: e.meaning,
                              }),
                              (0, R.jsxs)(`div`, {
                                className: `try-this`,
                                children: [
                                  (0, R.jsx)(`span`, {
                                    className: `eyebrow`,
                                    children: `EXAMPLE`,
                                  }),
                                  (0, R.jsx)(`p`, {
                                    children: e.example,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      e.title,
                    ),
                  ),
              }),
            ],
          }),
          (0, R.jsxs)(Rw, {
            value: `resources`,
            children: [
              (0, R.jsx)(`p`, {
                className: `library-note`,
                children: `Start with one lesson, then practice it. Links checked September 2026; video recommendations use the creator’s course listings, not a full viewing review. External sites open in a new tab.`,
              }),
              (0, R.jsx)(`div`, {
                className: `resource-grid`,
                children: IE.map((e) =>
                  (0, R.jsxs)(
                    `article`,
                    {
                      className: `resource-card`,
                      children: [
                        (0, R.jsxs)(`span`, {
                          className: `eyebrow`,
                          children: [e.kind, ` · `, e.level],
                        }),
                        (0, R.jsx)(`h2`, {
                          children: (0, R.jsxs)(`a`, {
                            href: e.url,
                            target: `_blank`,
                            rel: `noreferrer`,
                            children: [
                              e.title,
                              (0, R.jsx)(Fu, {
                                size: 20,
                              }),
                            ],
                          }),
                        }),
                        (0, R.jsx)(`p`, {
                          children: e.text,
                        }),
                        (0, R.jsx)(`small`, {
                          children: e.note,
                        }),
                      ],
                    },
                    e.title,
                  ),
                ),
              }),
              (0, R.jsxs)(`aside`, {
                className: `parent-playbook`,
                children: [
                  (0, R.jsx)(`h2`, {
                    children: `Ten minutes together`,
                  }),
                  (0, R.jsx)(`p`, {
                    children: `Choose a topic. Give your student a minute to plan and two to speak. Ask, “What was your main point?” Share one specific thing that worked, then let them try the opening again.`,
                  }),
                  (0, R.jsx)(`p`, {
                    children: `Let your coach or event handbook settle questions about rules. Rally’s topics and examples are practice material.`,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      t !== `resources` &&
        (0, R.jsxs)(`div`, {
          className: `library-results`,
          children: [
            (0, R.jsx)(`p`, {
              role: `status`,
              children: h.length
                ? `Showing ${Math.min(c, h.length)} of ${h.length} ${t}`
                : `No matches. Try a simpler search or another category.`,
            }),
            c < h.length &&
              (0, R.jsxs)(`button`, {
                className: `text-button`,
                onClick: () => l((e) => e + 10),
                children: [
                  `Show 10 more `,
                  (0, R.jsx)(Pu, {
                    size: 16,
                  }),
                ],
              }),
            h.length === 0 &&
              (0, R.jsx)(`button`, {
                className: `text-button`,
                onClick: () => {
                  (a(``), s(`All`));
                },
                children: `Clear filters`,
              }),
          ],
        }),
    ],
  });
}
var notebookEntrySchema = AE({
    id: OE(),
    date: OE(),
    topic: OE(),
    judge: OE(),
    keep: OE(),
    next: OE(),
    ratings: jE(OE(), OE()),
  }),
  practiceStages = [`Choose`, `Prep`, `Speak`, `Reflect`];
function Choice({ value: e, onChange: t, items: n, label: r }) {
  return (0, R.jsxs)(zw, {
    value: e,
    onValueChange: t,
    children: [
      (0, R.jsx)(Vw, {
        className: `choice`,
        "aria-label": r,
        children: (0, R.jsx)(Bw, {
          placeholder: `Choose a reflection`,
        }),
      }),
      (0, R.jsx)(Hw, {
        children: n.map((e) =>
          (0, R.jsx)(
            Uw,
            {
              value: e.value,
              children: e.label,
            },
            e.value,
          ),
        ),
      }),
    ],
  });
}
function ImpromptuPractice({
  active: e,
  onSave: t,
  focus: n,
  draw: r,
  redraw: a,
  startRequest: o,
  topicRequest: s,
}) {
  let [c, l] = (0, i.useState)(0),
    [u, d] = (0, i.useState)(0),
    [f, p] = (0, i.useState)(`gentle`),
    [m, h] = (0, i.useState)(2),
    [g, _] = (0, i.useState)(3),
    [v, y] = (0, i.useState)(`prep`),
    [b, x] = (0, i.useState)([``, ``, ``, ``]),
    [S, C] = (0, i.useState)([]),
    [w, T] = (0, i.useState)(`Me`),
    [E, ee] = (0, i.useState)({}),
    [D, O] = (0, i.useState)(``),
    [k, A] = (0, i.useState)(``),
    [j, M] = (0, i.useState)(!1),
    [te, ne] = (0, i.useState)(``),
    [N, re] = (0, i.useState)(!1),
    [ie, ae] = (0, i.useState)(``),
    [oe, se] = (0, i.useState)(0),
    [ce, le] = (0, i.useState)(``),
    ue = UE(60),
    P = GE(),
    de = xu(),
    fe = (0, i.useRef)(``),
    pe = (0, i.useRef)(0),
    me =
      f === `gentle`
        ? 60
        : f === `shared`
          ? 420
          : f === `custom`
            ? m * 60
            : 120,
    F = f === `gentle` ? 120 : f === `custom` ? g * 60 : 300;
  ((0, i.useEffect)(() => {
    e || (ue.pause(), P.stop());
  }, [e, ue.pause, P.stop]),
    (0, i.useEffect)(() => {
      c === 0 && ue.reset(me);
    }, [me, c, ue.reset]));
  let he = (e) => {
      (e !== u && (x([``, ``, ``, ``]), C([])),
        ee({}),
        O(``),
        A(``),
        ne(``),
        P.clear(),
        d(e),
        l(1),
        ue.reset(me),
        M(!1),
        (fe.current = crypto.randomUUID()));
    },
    ge = () => {
      let e = Math.ceil(ue.read());
      (f === `shared`
        ? (ae(`Prep used ${HE(420 - e)} → ${HE(e)} to speak.`), ue.reset(e))
        : (ae(``), ue.reset(F)),
        l(2));
    },
    _e = () => {
      (se(ue.total - ue.read()), ue.pause(), P.stop(), l(3));
    },
    ve = () => {
      (ue.pause(),
        P.clear(),
        l(0),
        x([``, ``, ``, ``]),
        ee({}),
        O(``),
        A(``),
        C([]),
        M(!1),
        ne(``),
        le(``),
        T(`Me`),
        se(0),
        ae(``),
        re(!1),
        (fe.current = ``),
        a());
    };
  (0, i.useEffect)(() => {
    o === pe.current
      ? e && j && ve()
      : ((pe.current = o),
        ve(),
        p(`gentle`),
        s !== null && he(s),
        ue.reset(60));
  }, [e, j, o]);
  let ye = [
      [`Structure`, `A listener could follow my main idea.`],
      [`Examples`, `I used a specific example and explained it.`],
      [`Voice & pace`, `I spoke clearly and left room for pauses.`],
      [`Recovery`, `When I got stuck, I found a way back.`],
    ],
    be = (0, R.jsxs)(`div`, {
      className: `timing-controls`,
      children: [
        (0, R.jsx)(`h3`, {
          children: `Choose your pace`,
        }),
        (0, R.jsx)(Kw, {
          value: f,
          onValueChange: p,
          "aria-label": `Timing preset`,
          className: `preset-group`,
          children: [
            [`gentle`, `Quick 1 + 2`, `1 min prep + 2 min speak`],
            [`standard`, `Standard 2 + 5`, `2 min prep + 5 min speak`],
            [`shared`, `Shared 7`, `Your prep and speech share one clock`],
            [`custom`, `Custom`, `Choose your own times`],
          ].map(([e, t, n]) =>
            (0, R.jsxs)(
              `label`,
              {
                className: `preset`,
                children: [
                  (0, R.jsx)(qw, {
                    value: e,
                  }),
                  (0, R.jsxs)(`span`, {
                    children: [
                      t,
                      (0, R.jsx)(`small`, {
                        children: n,
                      }),
                    ],
                  }),
                ],
              },
              e,
            ),
          ),
        }),
        f === `custom` &&
          (0, R.jsxs)(`div`, {
            className: `custom-time`,
            children: [
              (0, R.jsxs)(`label`, {
                children: [
                  `Prep minutes`,
                  (0, R.jsx)(`input`, {
                    type: `number`,
                    min: 1,
                    max: 15,
                    value: m,
                    onChange: (e) =>
                      h(Math.max(1, Math.min(15, Number(e.target.value) || 1))),
                  }),
                ],
              }),
              (0, R.jsxs)(`label`, {
                children: [
                  `Speak minutes`,
                  (0, R.jsx)(`input`, {
                    type: `number`,
                    min: 1,
                    max: 15,
                    value: g,
                    onChange: (e) =>
                      _(Math.max(1, Math.min(15, Number(e.target.value) || 1))),
                  }),
                ],
              }),
            ],
          }),
        (0, R.jsx)(`p`, {
          className: `preset-time`,
          children: f === `shared` ? `7:00 total` : `${HE(me)} + ${HE(F)}`,
        }),
        (0, R.jsx)(`p`, {
          className: `small`,
          children: `Practice presets. Seven-minute shared rounds are common; your coach or league may differ.`,
        }),
      ],
    });
  return (0, R.jsxs)(`div`, {
    className: `sheet`,
    "data-step": c,
    children: [
      (0, R.jsxs)(`section`, {
        className: `writing`,
        children: [
          (0, R.jsx)(`ol`, {
            className: `practice-progress`,
            "aria-label": `Practice steps`,
            children: practiceStages.map((e, t) =>
              (0, R.jsxs)(
                `li`,
                {
                  className: c === t ? `current` : c > t ? `done` : ``,
                  "aria-current": c === t ? `step` : void 0,
                  children: [
                    (0, R.jsx)(Su.span, {
                      animate: {
                        scale: c === t && !de ? 1.08 : 1,
                      },
                      transition: {
                        type: `spring`,
                        stiffness: 350,
                        damping: 25,
                      },
                      children:
                        c > t
                          ? (0, R.jsx)(Lu, {
                              size: 15,
                            })
                          : t + 1,
                    }),
                    e,
                  ],
                },
                e,
              ),
            ),
          }),
          (0, R.jsxs)(`div`, {
            className: `page-meta`,
            children: [
              (0, R.jsxs)(`span`, {
                className: `eyebrow`,
                children: [`IMPROMPTU / `, practiceStages[c]],
              }),
              (0, R.jsxs)(`span`, {
                className: `folio`,
                children: [`0`, c + 1, ` — 04`],
              }),
            ],
          }),
          (0, R.jsx)(Dc, {
            mode: `wait`,
            children: (0, R.jsx)(
              Su.div,
              {
                initial: {
                  opacity: 0,
                  x: de ? 0 : 16,
                },
                animate: {
                  opacity: 1,
                  x: 0,
                },
                exit: {
                  opacity: 0,
                  x: de ? 0 : -12,
                },
                transition: {
                  duration: 0.22,
                },
                children:
                  c === 0
                    ? (0, R.jsxs)(R.Fragment, {
                        children: [
                          (0, R.jsx)(`h1`, {
                            children: `Pick a topic. Make it yours.`,
                          }),
                          (0, R.jsx)(`p`, {
                            className: `lede`,
                            children: `Choose one. Jot four keywords. Say it out loud.`,
                          }),
                          (0, R.jsxs)(`details`, {
                            className: `pace-details`,
                            children: [
                              (0, R.jsxs)(`summary`, {
                                children: [
                                  `Change pace · `,
                                  f === `shared`
                                    ? `7 minutes shared`
                                    : `${HE(me)} prep + ${HE(F)} speak`,
                                ],
                              }),
                              be,
                            ],
                          }),
                          (0, R.jsx)(rD, {
                            draw: r,
                            onChoose: he,
                            onRedraw: a,
                          }),
                          (0, R.jsxs)(`div`, {
                            className: `bottom-note`,
                            children: [
                              (0, R.jsx)(`span`, {
                                className: `tiny-mark`,
                                children: `↳`,
                              }),
                              (0, R.jsxs)(`p`, {
                                children: [
                                  `Try this: choose the topic that brings`,
                                  (0, R.jsx)(`br`, {}),
                                  `a story or example to mind.`,
                                ],
                              }),
                            ],
                          }),
                        ],
                      })
                    : (0, R.jsxs)(R.Fragment, {
                        children: [
                          (0, R.jsxs)(Su.div, {
                            className: `chosen-topic`,
                            children: [
                              (0, R.jsx)(`span`, {
                                className: `eyebrow`,
                                children: LE[u][0],
                              }),
                              (0, R.jsx)(`h1`, {
                                children: LE[u][1],
                              }),
                            ],
                          }),
                          c === 1 &&
                            (0, R.jsxs)(R.Fragment, {
                              children: [
                                (0, R.jsxs)(`div`, {
                                  className: `section-toolbar`,
                                  children: [
                                    (0, R.jsx)(`h2`, {
                                      children: `Give your idea a little shape.`,
                                    }),
                                    (0, R.jsx)(Choice, {
                                      label: `Outline structure`,
                                      value: v,
                                      onChange: (e) =>
                                        y(e === `classic` ? `classic` : `prep`),
                                      items: [
                                        {
                                          value: `prep`,
                                          label: `PREP structure`,
                                        },
                                        {
                                          value: `classic`,
                                          label: `Two-point structure`,
                                        },
                                      ],
                                    }),
                                  ],
                                }),
                                (0, R.jsx)(`p`, {
                                  className: `small`,
                                  children: `Keywords are enough. You’re making a path, not writing an essay.`,
                                }),
                                (0, R.jsx)(`div`, {
                                  className: `speech-outline`,
                                  children: RE[v].map((e, t) =>
                                    (0, R.jsxs)(
                                      `div`,
                                      {
                                        className: `outline-row`,
                                        children: [
                                          (0, R.jsxs)(`span`, {
                                            className: `hanging`,
                                            children: [`0`, t + 1],
                                          }),
                                          (0, R.jsx)(`label`, {
                                            htmlFor: `outline-${t}`,
                                            children: e.name,
                                          }),
                                          (0, R.jsx)(`textarea`, {
                                            id: `outline-${t}`,
                                            value: b[t],
                                            onChange: (e) =>
                                              x((n) =>
                                                n.map((n, r) =>
                                                  r === t ? e.target.value : n,
                                                ),
                                              ),
                                            onBlur: () => {
                                              b[t].trim() &&
                                                C((e) =>
                                                  e.includes(t) ? e : [...e, t],
                                                );
                                            },
                                            placeholder: e.hint,
                                            rows: 2,
                                          }),
                                          S.includes(t) &&
                                            (0, R.jsx)(Su.div, {
                                              className: `ink-line`,
                                              initial: {
                                                scaleX: +!!de,
                                              },
                                              animate: {
                                                scaleX: 1,
                                              },
                                              transition: {
                                                duration: 0.45,
                                              },
                                            }),
                                        ],
                                      },
                                      t,
                                    ),
                                  ),
                                }),
                                (0, R.jsxs)(`div`, {
                                  className: `actions`,
                                  children: [
                                    (0, R.jsxs)(`button`, {
                                      className: `text-button`,
                                      onClick: () => {
                                        (ue.pause(), l(0));
                                      },
                                      children: [
                                        (0, R.jsx)(Nu, {
                                          size: 16,
                                        }),
                                        ` Topics`,
                                      ],
                                    }),
                                    (0, R.jsxs)(`button`, {
                                      className: `button primary`,
                                      onClick: ge,
                                      children: [
                                        `Ready to speak `,
                                        (0, R.jsx)(Pu, {
                                          size: 17,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          c === 2 &&
                            (0, R.jsxs)(R.Fragment, {
                              children: [
                                (0, R.jsxs)(`div`, {
                                  className: `section-toolbar`,
                                  children: [
                                    (0, R.jsx)(`h2`, {
                                      children: `Your ideas. Your voice.`,
                                    }),
                                    (0, R.jsxs)(`button`, {
                                      className: `text-button`,
                                      onClick: () => re(!0),
                                      children: [
                                        (0, R.jsx)(Uu, {
                                          size: 16,
                                        }),
                                        ` Timekeeper view`,
                                      ],
                                    }),
                                  ],
                                }),
                                (0, R.jsx)(`p`, {
                                  className: `lede`,
                                  children: n
                                    ? `Your focus: ${n}`
                                    : `Take a breath. Start with one clear sentence.`,
                                }),
                                (0, R.jsx)(`div`, {
                                  className: `cue-sheet`,
                                  children: RE[v].map((e, t) =>
                                    (0, R.jsxs)(
                                      `div`,
                                      {
                                        className: `cue-row`,
                                        children: [
                                          (0, R.jsxs)(`span`, {
                                            className: `hanging`,
                                            children: [`0`, t + 1],
                                          }),
                                          (0, R.jsxs)(`div`, {
                                            children: [
                                              (0, R.jsx)(`span`, {
                                                className: `eyebrow`,
                                                children: e.name,
                                              }),
                                              (0, R.jsx)(`p`, {
                                                children: b[t].trim()
                                                  ? b[t]
                                                      .trim()
                                                      .split(/\s+/)
                                                      .slice(0, 8)
                                                      .join(` `) +
                                                    (b[t].trim().split(/\s+/)
                                                      .length > 8
                                                      ? `…`
                                                      : ``)
                                                  : e.hint,
                                              }),
                                            ],
                                          }),
                                        ],
                                      },
                                      e.name,
                                    ),
                                  ),
                                }),
                                (0, R.jsx)(`p`, {
                                  className: `small`,
                                  children: `Cue words are for practice. Check your event’s rules on speaking notes.`,
                                }),
                                (0, R.jsx)(KE, {
                                  recorder: P,
                                }),
                                (0, R.jsxs)(`div`, {
                                  className: `actions`,
                                  children: [
                                    (0, R.jsx)(`button`, {
                                      className: `text-button`,
                                      onClick: () => {
                                        (ue.pause(),
                                          P.stop(),
                                          l(1),
                                          ue.reset(me));
                                      },
                                      children: `Restart prep`,
                                    }),
                                    (0, R.jsxs)(`button`, {
                                      className: `button primary`,
                                      onClick: _e,
                                      children: [
                                        `Finish & reflect `,
                                        (0, R.jsx)(Pu, {
                                          size: 17,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          c === 3 &&
                            (0, R.jsxs)(R.Fragment, {
                              children: [
                                (0, R.jsxs)(`div`, {
                                  className: `section-toolbar`,
                                  children: [
                                    (0, R.jsx)(`h2`, {
                                      children: `What worked? What’s next?`,
                                    }),
                                    (0, R.jsx)(Choice, {
                                      label: `Who is reflecting?`,
                                      value: w,
                                      onChange: (e) => {
                                        (T(e), M(!1));
                                      },
                                      items: [
                                        {
                                          value: `Me`,
                                          label: `Reflecting: Me`,
                                        },
                                        {
                                          value: `Parent`,
                                          label: `Reflecting: Parent`,
                                        },
                                      ],
                                    }),
                                  ],
                                }),
                                (0, R.jsxs)(`p`, {
                                  className: `small`,
                                  children: [
                                    HE(oe),
                                    ` on the speech timer. `,
                                    w === `Parent`
                                      ? `Give specific, kind feedback on what you heard.`
                                      : `Think about what felt clear and what you want to try.`,
                                    ` No automatic judging.`,
                                  ],
                                }),
                                P.audio &&
                                  (0, R.jsxs)(`div`, {
                                    className: `audio-review`,
                                    children: [
                                      (0, R.jsx)(`audio`, {
                                        controls: !0,
                                        src: P.audio,
                                      }),
                                      (0, R.jsxs)(`a`, {
                                        className: `text-button`,
                                        href: P.audio,
                                        download: `rally-practice.${P.extension}`,
                                        children: [
                                          (0, R.jsx)(Vu, {
                                            size: 16,
                                          }),
                                          ` Download`,
                                        ],
                                      }),
                                      (0, R.jsx)(`button`, {
                                        className: `icon-button`,
                                        "aria-label": `Delete recording`,
                                        onClick: P.clear,
                                        children: (0, R.jsx)(td, {
                                          size: 17,
                                        }),
                                      }),
                                    ],
                                  }),
                                (0, R.jsx)(`div`, {
                                  className: `rubric`,
                                  children: ye.map(([e, t]) =>
                                    (0, R.jsxs)(
                                      `div`,
                                      {
                                        className: `rubric-row`,
                                        children: [
                                          (0, R.jsxs)(`div`, {
                                            children: [
                                              (0, R.jsx)(`h3`, {
                                                children: e,
                                              }),
                                              (0, R.jsx)(`p`, {
                                                className: `small`,
                                                children: t,
                                              }),
                                            ],
                                          }),
                                          (0, R.jsx)(Choice, {
                                            label: `${e} reflection`,
                                            value: E[e] || ``,
                                            onChange: (t) => {
                                              (ee((n) => ({
                                                ...n,
                                                [e]: t,
                                              })),
                                                M(!1));
                                            },
                                            items: [
                                              {
                                                value: `Not yet`,
                                                label: `Not yet`,
                                              },
                                              {
                                                value: `Getting there`,
                                                label: `Getting there`,
                                              },
                                              {
                                                value: `Felt clear`,
                                                label: `Felt clear`,
                                              },
                                            ],
                                          }),
                                        ],
                                      },
                                      e,
                                    ),
                                  ),
                                }),
                                (0, R.jsx)(`label`, {
                                  className: `reflection-label`,
                                  htmlFor: `keep`,
                                  children: `One thing to keep`,
                                }),
                                (0, R.jsx)(`textarea`, {
                                  id: `keep`,
                                  value: D,
                                  onChange: (e) => {
                                    (O(e.target.value), M(!1));
                                  },
                                  placeholder: `A moment that worked…`,
                                  rows: 2,
                                }),
                                (0, R.jsx)(`label`, {
                                  className: `reflection-label`,
                                  htmlFor: `try`,
                                  children: `One thing to try next`,
                                }),
                                (0, R.jsx)(`textarea`, {
                                  id: `try`,
                                  value: k,
                                  onChange: (e) => {
                                    (A(e.target.value), M(!1));
                                  },
                                  placeholder: `One small, specific change…`,
                                  rows: 2,
                                }),
                                (0, R.jsxs)(`div`, {
                                  className: `actions`,
                                  children: [
                                    (0, R.jsx)(`button`, {
                                      className: `text-button`,
                                      onClick: ve,
                                      children: `Try another topic`,
                                    }),
                                    (0, R.jsxs)(`button`, {
                                      className: `button primary`,
                                      disabled: j,
                                      onClick: () => {
                                        if (!D.trim() && !k.trim()) {
                                          (ne(
                                            `Write one thing to keep or try next, then save.`,
                                          ),
                                            document
                                              .getElementById(`keep`)
                                              ?.focus());
                                          return;
                                        }
                                        t({
                                          id: fe.current,
                                          date: new Date().toISOString(),
                                          topic: LE[u][1],
                                          judge: w,
                                          keep: D,
                                          next: k,
                                          ratings: E,
                                        })
                                          ? (M(!0), ne(``))
                                          : ne(
                                              `This browser could not save. Copy your reflection before leaving.`,
                                            );
                                      },
                                      children: [
                                        j
                                          ? (0, R.jsx)(Lu, {
                                              size: 17,
                                            })
                                          : (0, R.jsx)(Iu, {
                                              size: 17,
                                            }),
                                        ` `,
                                        j
                                          ? `Saved to notebook`
                                          : `Save to my notebook`,
                                      ],
                                    }),
                                  ],
                                }),
                                (0, R.jsx)(`p`, {
                                  role: `status`,
                                  className: `small`,
                                  children:
                                    te ||
                                    (j
                                      ? `Saved in this browser only.`
                                      : `Add one keep or try to save.`),
                                }),
                              ],
                            }),
                        ],
                      }),
              },
              c,
            ),
          }),
        ],
      }),
      (0, R.jsxs)(`aside`, {
        className: `margin`,
        children: [
          (0, R.jsx)(`div`, {
            className: `eyebrow margin-title`,
            children: `MARGIN NOTES`,
          }),
          c === 0
            ? (0, R.jsx)(R.Fragment, {
                children: (0, R.jsxs)(`div`, {
                  className: `coach-tip`,
                  children: [
                    (0, R.jsx)(`span`, {
                      className: `coach-symbol`,
                      children: `↗`,
                    }),
                    (0, R.jsx)(`h3`, {
                      children: n
                        ? `Your next focus`
                        : `Start small. Build from there.`,
                    }),
                    (0, R.jsx)(`p`, {
                      children:
                        n ||
                        `Pick the topic that reminds you of a story, a game, or something you’ve seen. One clear idea is enough.`,
                    }),
                    (0, R.jsx)(`span`, {
                      className: `coach-tag`,
                      children: `YOU’VE GOT A NEXT STEP`,
                    }),
                  ],
                }),
              })
            : c < 3
              ? (0, R.jsxs)(R.Fragment, {
                  children: [
                    (0, R.jsx)(WE, {
                      timer: ue,
                      label:
                        c === 1
                          ? f === `shared`
                            ? `Shared clock · prep`
                            : `Preparation`
                          : `Your speech`,
                    }),
                    ie &&
                      (0, R.jsx)(`p`, {
                        className: `small rollover`,
                        children: ie,
                      }),
                    (0, R.jsxs)(`div`, {
                      className: `coach-tip`,
                      children: [
                        (0, R.jsx)(`h3`, {
                          children:
                            c === 1
                              ? `Keywords, not an essay.`
                              : `Give your idea some room.`,
                        }),
                        (0, R.jsx)(`p`, {
                          children:
                            c === 1
                              ? `One point, one reason, one example. Use the outline to find your path.`
                              : `Pause between ideas. You can take a breath and look at your cue words.`,
                        }),
                      ],
                    }),
                  ],
                })
              : (0, R.jsxs)(`div`, {
                  className: `coach-tip`,
                  children: [
                    (0, R.jsx)(`h3`, {
                      children: `One keep. One next step.`,
                    }),
                    (0, R.jsx)(`p`, {
                      children: `You don’t need to fix everything. Pick one small thing to try next time.`,
                    }),
                  ],
                }),
          (0, R.jsx)(`p`, {
            className: `small status-note`,
            role: `status`,
            children: ce,
          }),
        ],
      }),
      (0, R.jsx)(Jw, {
        open: N,
        onOpenChange: re,
        children: (0, R.jsxs)(Qw, {
          className: `signal-dialog`,
          children: [
            (0, R.jsx)($w, {
              children: `Timekeeper view`,
            }),
            (0, R.jsx)(eT, {
              children: `Time remaining in this speech.`,
            }),
            (0, R.jsx)(`div`, {
              className: `signal-digits`,
              children: HE(ue.left),
            }),
            (0, R.jsx)(`button`, {
              className: `button`,
              onClick: ue.running ? ue.pause : ue.start,
              children: ue.running ? `Pause` : `Start timer`,
            }),
          ],
        }),
      }),
    ],
  });
}
function Notebook({
  entries: e,
  onDelete: t,
  error: n,
  onStart: r,
  justSaved: a,
  onRestore,
}) {
  let [o, s] = (0, i.useState)(``),
    c = (0, i.useRef)(null);
  return (
    (0, i.useEffect)(() => {
      a &&
        c.current?.focus({
          preventScroll: !0,
        });
    }, [a]),
    (0, R.jsxs)(`div`, {
      className: `notebook-page`,
      children: [
        (0, R.jsxs)(`div`, {
          className: `notebook-heading`,
          children: [
            (0, R.jsxs)(`div`, {
              children: [
                (0, R.jsx)(`span`, {
                  className: `eyebrow`,
                  children: `MY NOTEBOOK`,
                }),
                (0, R.jsx)(`h1`, {
                  children: `Your practice, on the record.`,
                }),
                (0, R.jsx)(`p`, {
                  className: `lede`,
                  children: `Keep what worked. Pick one thing to try next. Saved in this browser.`,
                }),
              ],
            }),
            (0, R.jsxs)(`button`, {
              className: `button primary`,
              onClick: r,
              children: [
                `Practice impromptu `,
                (0, R.jsx)(Pu, {
                  size: 18,
                }),
              ],
            }),
          ],
        }),
        (0, R.jsx)(NotebookBackup, {
          entries: e,
          onRestore,
          error: n,
        }),
        n &&
          (0, R.jsx)(`p`, {
            role: `status`,
            className: `save-error`,
            children: n,
          }),
        e.length === 0
          ? (0, R.jsxs)(`div`, {
              className: `empty-notebook`,
              children: [
                (0, R.jsx)(`span`, {
                  className: `empty-icon`,
                  children: (0, R.jsx)(Iu, {
                    size: 32,
                  }),
                }),
                (0, R.jsx)(`h2`, {
                  children: `Your first reflection goes here.`,
                }),
                (0, R.jsxs)(`p`, {
                  children: [
                    `After speaking, write one thing to keep and one to try.`,
                    (0, R.jsx)(`br`, {}),
                    `Tap `,
                    (0, R.jsx)(`strong`, {
                      children: `Save to my notebook`,
                    }),
                    ` and your reflection lands here.`,
                  ],
                }),
                (0, R.jsxs)(`div`, {
                  className: `notebook-how`,
                  children: [
                    (0, R.jsx)(`span`, {
                      children: `1. Pick a topic`,
                    }),
                    (0, R.jsx)(Pu, {
                      size: 15,
                    }),
                    (0, R.jsx)(`span`, {
                      children: `2. Give it a try`,
                    }),
                    (0, R.jsx)(Pu, {
                      size: 15,
                    }),
                    (0, R.jsx)(`span`, {
                      children: `3. Save a reflection`,
                    }),
                  ],
                }),
                (0, R.jsxs)(`button`, {
                  className: `button primary`,
                  onClick: r,
                  children: [
                    `Do your first practice `,
                    (0, R.jsx)(Pu, {
                      size: 18,
                    }),
                  ],
                }),
              ],
            })
          : (0, R.jsxs)(R.Fragment, {
              children: [
                (0, R.jsxs)(`div`, {
                  className: `next-focus`,
                  children: [
                    (0, R.jsx)(`span`, {
                      className: `eyebrow`,
                      children: `YOUR NEXT FOCUS`,
                    }),
                    (0, R.jsx)(`h2`, {
                      children:
                        (
                          e.find((e) => e.judge === `Me` && e.next.trim()) ||
                          e.find((e) => e.next.trim())
                        )?.next || `Keep building on what worked last time.`,
                    }),
                  ],
                }),
                e.map((e) =>
                  (0, R.jsxs)(
                    `article`,
                    {
                      className: `notebook-entry ${a === e.id ? `just-saved` : ``}`,
                      ref: a === e.id ? c : void 0,
                      tabIndex: -1,
                      "aria-label": `Saved reflection: ${e.topic}`,
                      children: [
                        (0, R.jsxs)(`div`, {
                          className: `section-toolbar`,
                          children: [
                            (0, R.jsxs)(`span`, {
                              className: `eyebrow`,
                              children: [
                                new Date(e.date).toLocaleDateString(void 0, {
                                  month: `short`,
                                  day: `numeric`,
                                }),
                                ` · `,
                                e.judge === `Me`
                                  ? `My reflection`
                                  : e.judge === `Parent`
                                    ? `Parent’s notes`
                                    : `${e.judge} reflection`,
                                ` `,
                                a === e.id &&
                                  (0, R.jsxs)(`span`, {
                                    className: `saved-chip`,
                                    children: [
                                      (0, R.jsx)(Lu, {
                                        size: 13,
                                      }),
                                      ` Just saved`,
                                    ],
                                  }),
                              ],
                            }),
                            o === e.id
                              ? (0, R.jsxs)(`div`, {
                                  className: `delete-actions`,
                                  children: [
                                    (0, R.jsx)(`button`, {
                                      className: `text-button`,
                                      onClick: () => {
                                        (t(e.id), s(``));
                                      },
                                      children: `Confirm delete`,
                                    }),
                                    (0, R.jsx)(`button`, {
                                      className: `text-button`,
                                      onClick: () => s(``),
                                      children: `Keep`,
                                    }),
                                  ],
                                })
                              : (0, R.jsx)(`button`, {
                                  className: `icon-button`,
                                  onClick: () => s(e.id),
                                  "aria-label": `Delete reflection for ${e.topic}`,
                                  children: (0, R.jsx)(td, {
                                    size: 16,
                                  }),
                                }),
                          ],
                        }),
                        (0, R.jsx)(`h2`, {
                          children: e.topic,
                        }),
                        (0, R.jsxs)(`div`, {
                          className: `reflection-pair`,
                          children: [
                            (0, R.jsxs)(`p`, {
                              children: [
                                (0, R.jsx)(`span`, {
                                  className: `eyebrow`,
                                  children: `KEEP DOING`,
                                }),
                                e.keep || `No note added.`,
                              ],
                            }),
                            (0, R.jsxs)(`p`, {
                              children: [
                                (0, R.jsx)(`span`, {
                                  className: `eyebrow`,
                                  children: `TRY NEXT`,
                                }),
                                e.next || `No note added.`,
                              ],
                            }),
                          ],
                        }),
                        (0, R.jsx)(`div`, {
                          className: `rating-summary`,
                          children: Object.entries(e.ratings).map(([e, t]) =>
                            (0, R.jsxs)(
                              `span`,
                              {
                                children: [e, ` · `, t],
                              },
                              e,
                            ),
                          ),
                        }),
                      ],
                    },
                    e.id,
                  ),
                ),
              ],
            }),
      ],
    })
  );
}
function Rally() {
  let [e, t] = (0, i.useState)([30, 4, 11]);
  (0, i.useEffect)(() => {
    let e = new Date(),
      n = Math.floor(
        Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()) / 864e5,
      );
    t([0, 17, 34].map((e) => (n + e) % LE.length));
  }, []);
  let n = () => {
      let n = LE.map((e, t) => t).filter((t) => !e.includes(t));
      for (let e = n.length - 1; e > 0; e--) {
        let t = Math.floor(Math.random() * (e + 1));
        [n[e], n[t]] = [n[t], n[e]];
      }
      t(n.slice(0, 3));
    },
    [r, a] = (0, i.useState)(0),
    [o, s] = (0, i.useState)(null),
    [c, l] = (0, i.useState)(null),
    [u, d] = (0, i.useState)(`home`),
    [f, p] = (0, i.useState)([]),
    [m, h] = (0, i.useState)(``),
    [g, _] = (0, i.useState)(!1),
    [v, y] = (0, i.useState)(``);
  eD(u, f.length);
  let b = (0, i.useCallback)((e) => {
    (d(e),
      window.scrollTo({
        top: 0,
        behavior: `instant`,
      }));
  }, []);
  return (
    (0, i.useEffect)(() => {
      try {
        let e = localStorage.getItem(`rally-notebook`);
        if (e) {
          let t = kE(notebookEntrySchema).safeParse(JSON.parse(e));
          t.success
            ? p(t.data)
            : h(
                `Saved notes could not be read. New notes will not replace them.`,
              );
        }
      } catch {
        h(`Browser storage is unavailable. You can still practice.`);
      } finally {
        _(!0);
      }
    }, []),
    (0, R.jsx)(Pc, {
      reducedMotion: `user`,
      children: (0, R.jsxs)(Pw, {
        value: u,
        onValueChange: b,
        className: `app`,
        children: [
          (0, R.jsxs)(`header`, {
            className: `masthead`,
            children: [
              (0, R.jsxs)(`button`, {
                onClick: () => b(`home`),
                className: `wordmark`,
                "aria-label": `Rally home`,
                children: [
                  (0, R.jsx)(`span`, {
                    className: `brand-mark`,
                    children: `r`,
                  }),
                  `rally`,
                  (0, R.jsx)(`span`, {
                    className: `wordmark-dot`,
                    children: `.`,
                  }),
                ],
              }),
              (0, R.jsxs)(Iw, {
                className: `main-tabs`,
                children: [
                  (0, R.jsxs)(Lw, {
                    value: `home`,
                    children: [
                      (0, R.jsx)(Hu, {
                        size: 16,
                      }),
                      (0, R.jsx)(`span`, {
                        children: `Home`,
                      }),
                    ],
                  }),
                  (0, R.jsxs)(Lw, {
                    value: `impromptu`,
                    children: [
                      (0, R.jsx)(Gu, {
                        size: 16,
                      }),
                      (0, R.jsx)(`span`, {
                        children: `Impromptu`,
                      }),
                    ],
                  }),
                  (0, R.jsxs)(Lw, {
                    value: `ld`,
                    children: [
                      (0, R.jsx)(Wu, {
                        size: 16,
                      }),
                      (0, R.jsx)(`span`, {
                        children: `Lincoln–Douglas`,
                      }),
                    ],
                  }),
                  (0, R.jsxs)(Lw, {
                    value: `learn`,
                    children: [
                      (0, R.jsx)(Iu, {
                        size: 16,
                      }),
                      (0, R.jsx)(`span`, {
                        children: `Learn`,
                      }),
                    ],
                  }),
                  (0, R.jsxs)(Lw, {
                    value: `notebook`,
                    children: [
                      (0, R.jsx)(Iu, {
                        size: 16,
                      }),
                      (0, R.jsx)(`span`, {
                        children: `My notebook`,
                      }),
                      f.length > 0 &&
                        (0, R.jsx)(`span`, {
                          className: `note-count`,
                          children: f.length,
                        }),
                    ],
                  }),
                ],
              }),
              (0, R.jsxs)(`button`, {
                hidden: u === `home`,
                className: `button primary header-cta`,
                onClick: () => b(`impromptu`),
                children: [
                  `Start practice `,
                  (0, R.jsx)(Pu, {
                    size: 17,
                  }),
                ],
              }),
              (0, R.jsxs)(Jw, {
                children: [
                  (0, R.jsx)(Yw, {
                    className: `privacy-link`,
                    "aria-label": `Privacy: your practice stays on this device`,
                    children: (0, R.jsx)($u, {
                      size: 18,
                    }),
                  }),
                  (0, R.jsxs)(Qw, {
                    children: [
                      (0, R.jsx)($w, {
                        children: `A space to practice.`,
                      }),
                      (0, R.jsx)(eT, {
                        children: `Your writing stays in this page. Reflections you save go into this browser’s local storage. Audio is recorded only when you choose, stays in this tab, and is lost on reload unless downloaded. No audio or writing is sent to an AI judge. Clearing browser data erases your notebook. Notes do not sync between devices or website addresses.`,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, R.jsxs)(`main`, {
            children: [
              (0, R.jsx)(Rw, {
                value: `home`,
                className: `main-panel`,
                children: (0, R.jsx)(Dashboard, {
                  onNavigate: b,
                  onStart: () => {
                    (s(null), a((e) => e + 1), b(`impromptu`));
                  },
                  onRound: (e, t = 0) => {
                    (l({
                      mode: e,
                      stage: t,
                      id: Date.now(),
                    }),
                      b(`ld`));
                  },
                  focus:
                    (
                      f.find((e) => e.judge === `Me` && e.next.trim()) ||
                      f.find((e) => e.next.trim())
                    )?.next || ``,
                  entryCount: f.length,
                }),
              }),
              (0, R.jsx)(Rw, {
                value: `impromptu`,
                forceMount: !0,
                className: `main-panel`,
                children: (0, R.jsx)(ImpromptuPractice, {
                  topicRequest: o,
                  startRequest: r,
                  draw: e,
                  redraw: n,
                  active: u === `impromptu`,
                  onSave: (e) => {
                    if (!g || m) return !1;
                    let t = [e, ...f.filter((t) => t.id !== e.id)];
                    try {
                      return (
                        localStorage.setItem(
                          `rally-notebook`,
                          JSON.stringify(t),
                        ),
                        p(t),
                        y(e.id),
                        b(`notebook`),
                        !0
                      );
                    } catch {
                      return !1;
                    }
                  },
                  focus:
                    (
                      f.find((e) => e.judge === `Me` && e.next.trim()) ||
                      f.find((e) => e.next.trim())
                    )?.next || ``,
                }),
              }),
              (0, R.jsx)(Rw, {
                value: `ld`,
                forceMount: !0,
                className: `main-panel`,
                children: (0, R.jsx)($E, {
                  request: c,
                  active: u === `ld`,
                }),
              }),
              (0, R.jsx)(Rw, {
                value: `learn`,
                className: `main-panel`,
                children: (0, R.jsx)(LearnLibrary, {
                  onPractice: (e) => {
                    let t = LE.findIndex((t) => t[1] === e);
                    t < 0 || (s(t), a((e) => e + 1), b(`impromptu`));
                  },
                }),
              }),
              (0, R.jsx)(Rw, {
                value: `notebook`,
                className: `main-panel`,
                children: g
                  ? (0, R.jsx)(Notebook, {
                      entries: f,
                      error: m,
                      justSaved: v,
                      onRestore: (incoming) => {
                        if (m)
                          throw new Error(
                            "Your saved notebook could not be read. Restore is paused to protect those notes.",
                          );
                        const merged = mergeEntries(f, incoming);
                        try {
                          localStorage.setItem(
                            "rally-notebook",
                            JSON.stringify(merged),
                          );
                        } catch {
                          throw new Error(
                            "This browser could not save the backup. Your existing notes have not changed.",
                          );
                        }
                        p(merged);
                        return merged.length - f.length;
                      },
                      onStart: () => b(`impromptu`),
                      onDelete: (e) => {
                        try {
                          let t = f.filter((t) => t.id !== e);
                          (localStorage.setItem(
                            `rally-notebook`,
                            JSON.stringify(t),
                          ),
                            p(t));
                        } catch {
                          h(
                            `Could not delete this note. Browser storage is unavailable.`,
                          );
                        }
                      },
                    })
                  : (0, R.jsx)(`p`, {
                      className: `loading-notes`,
                      role: `status`,
                      children: `Opening your notebook…`,
                    }),
              }),
            ],
          }),
          (0, R.jsxs)(`footer`, {
            children: [
              (0, R.jsxs)(`span`, {
                children: [
                  (0, R.jsx)(`strong`, {
                    children: `rally.`,
                  }),
                  ` Your debate practice space.`,
                ],
              }),
              (0, R.jsx)(`span`, {
                children: `Notes stay in this browser.`,
              }),
            ],
          }),
        ],
      }),
    })
  );
}
export { Choice, Rally as default };
