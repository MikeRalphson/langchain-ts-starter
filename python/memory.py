from langchain.llms import OpenAI
from langchain.chains import ConversationChain
from langchain.memory import ConversationSummaryBufferMemory

llm = OpenAI(temperature=0.25)
memory = ConversationSummaryBufferMemory(llm=OpenAI(temperature=0.25), return_messages=True)

conversation = ConversationChain(
    llm=llm, 
    # We set a very low max_token_limit for the purposes of testing.
    memory=ConversationSummaryBufferMemory(llm=OpenAI(), max_token_limit=80),
    verbose=True
)

conversation.predict(input="Hi there!")
conversation.predict(input="Tell me about yourself.")
conversation.predict(input="I like comedic or parody science-fiction novels, who are good authors for me to read?")
conversation.predict(input="Thank you, goodbye.")

messages = memory.chat_memory.messages
previous_summary = ""
memory.predict_new_summary(messages, previous_summary)
