from langchain.llms import OpenAI
from langchain.chains import ConversationChain
from langchain.memory import ConversationBufferMemory

llm = OpenAI(temperature=0.25)
conversation = ConversationChain(
    llm=llm, 
    verbose=True, 
    memory=ConversationBufferMemory()
)

conversation.predict(input="Hi there!")
conversation.predict(input="Tell me about yourself.")
conversation.predict(input="I like comedic or parody science-fiction novels, who are good authors for me to read?")
conversation.predict(input="Thank you, goodbye.")
